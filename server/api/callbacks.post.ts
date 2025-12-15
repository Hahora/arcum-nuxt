import type { H3Event } from "h3";

// Обновите интерфейс CallbackRequest
interface CallbackRequest {
  name: string;
  phone: string;
  service_category: string;
  source_page: string;
  comment?: string;
  subcategory?: string;
  cleaning_details?: {
    location_type: string;
    cleaning_type: string;
    area_size: string;
  };
  dry_cleaning_details?: {
    item_type: string;
    material: string;
    seats_count: string;
  };
  corporate_details?: {
    location_type: string;
    cleaning_type: string;
    area_size: string;
  };
}

interface ServerResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export default defineEventHandler(
  async (event: H3Event): Promise<ServerResponse> => {
    // Проверяем метод запроса
    if (getMethod(event) !== "POST") {
      throw createError({
        statusCode: 405,
        statusMessage: "Method Not Allowed",
      });
    }

    try {
      // Получаем IP адрес и порт сервера из переменных окружения
      const config = useRuntimeConfig();
      const serverIP = config.serverIP || process.env.SERVER_IP;
      const serverPort = config.serverPort || process.env.SERVER_PORT;

      if (!serverIP || !serverPort) {
        console.error("SERVER_IP или SERVER_PORT не настроены");
        throw createError({
          statusCode: 500,
          statusMessage: "Серверная ошибка конфигурации",
        });
      }

      // Получаем данные из тела запроса БЕЗ ИЗМЕНЕНИЙ
      const body: CallbackRequest = await readBody(event);

      console.log("Получены данные от клиента:", body);
      console.log("Subcategory:", body.subcategory);
      console.log("Cleaning details:", body.cleaning_details);
      console.log("Dry cleaning details:", body.dry_cleaning_details); // ← ДОБАВИТЬ ЭТО
      console.log("Corporate details:", body.corporate_details);

      // Валидация обязательных полей
      if (
        !body.name ||
        !body.phone ||
        !body.service_category ||
        !body.source_page
      ) {
        throw createError({
          statusCode: 400,
          statusMessage: "Не все обязательные поля заполнены",
          data: {
            missing_fields: {
              name: !body.name,
              phone: !body.phone,
              service_category: !body.service_category,
              source_page: !body.source_page,
            },
          },
        });
      }

      // НЕ форматируем телефон - отправляем как есть!
      // НЕ добавляем дополнительные поля!

      // Подготавливаем данные для отправки на внешний сервер
      // В ТОЧНОМ соответствии с требуемой структурой
      const externalData: any = {
        name: body.name.trim(),
        phone: body.phone.trim(), // оставляем как есть
        service_category: body.service_category,
        source_page: body.source_page,
        comment: body.comment || "", // всегда строка, даже если пустая
      };

      // Добавляем subcategory если есть
      if (body.subcategory) {
        externalData.subcategory = body.subcategory.trim();
      }

      // ОБРАБОТКА cleaning_details для ростовского калькулятора
      if (body.cleaning_details) {
        externalData.cleaning_details = {
          location_type: body.cleaning_details.location_type || "Не указано",
          cleaning_type: body.cleaning_details.cleaning_type || "Не указано",
          area_size: body.cleaning_details.area_size || "Не указано",
        };

        // Также добавляем эти поля отдельно для совместимости
        // если внешний сервер ожидает плоскую структуру
        externalData.location_type =
          body.cleaning_details.location_type || "Не указано";
        externalData.cleaning_type =
          body.cleaning_details.cleaning_type || "Не указано";
        externalData.area_size =
          body.cleaning_details.area_size || "Не указано";
      }

      // ОБРАБОТКА dry_cleaning_details для химчистки ← ДОБАВИТЬ ЭТУ СЕКЦИЮ
      if (body.dry_cleaning_details) {
        externalData.dry_cleaning_details = {
          item_type: body.dry_cleaning_details.item_type || "Не указано",
          material: body.dry_cleaning_details.material || "Не указано",
          seats_count: body.dry_cleaning_details.seats_count || "Не указано",
        };

        // Также добавляем эти поля отдельно для совместимости
        // если внешний сервер ожидает плоскую структуру
        externalData.item_type =
          body.dry_cleaning_details.item_type || "Не указано";
        externalData.material =
          body.dry_cleaning_details.material || "Не указано";
        externalData.seats_count =
          body.dry_cleaning_details.seats_count || "Не указано";
      }

      // Обработка corporate_details для корпоративного калькулятора
      if (body.corporate_details) {
        externalData.corporate_details = {
          location_type: body.corporate_details.location_type || "Не указано",
          cleaning_type: body.corporate_details.cleaning_type || "Не указано",
          area_size: body.corporate_details.area_size || "Не указано",
        };
      }

      console.log("Отправка данных на внешний сервер:", {
        server: `${serverIP}:${serverPort}`,
        data: externalData,
        url: `http://${serverIP}:${serverPort}/api/callbacks/`,
      });

      try {
        // Отправляем данные на внешний сервер
        const externalResponse = await $fetch<any>(
          `http://${serverIP}:${serverPort}/api/callbacks/`,
          {
            method: "POST",
            body: externalData,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            timeout: 10000, // 10 секунд таймаут
          }
        );

        console.log("Ответ от внешнего сервера:", externalResponse);

        // Возвращаем успешный ответ
        return {
          success: true,
          message: "Заявка успешно отправлена",
          data: externalResponse,
        };
      } catch (fetchError: any) {
        console.error("Ошибка при отправке на внешний сервер:", {
          message: fetchError.message,
          code: fetchError.code,
          status: fetchError.status,
          statusText: fetchError.statusText,
          data: fetchError.data,
          response: fetchError.response,
        });

        // Если внешний сервер вернул ошибку 422, передаем ее дальше
        if (fetchError.status === 422) {
          throw createError({
            statusCode: 422,
            statusMessage: "Unprocessable Entity",
            data: {
              external_error: fetchError.data,
              original_data: externalData,
            },
          });
        }

        if (fetchError.code === "ECONNREFUSED") {
          throw createError({
            statusCode: 503,
            statusMessage: "Сервис временно недоступен",
            data: { server: `${serverIP}:${serverPort}` },
          });
        }

        // Другие ошибки внешнего сервера
        throw createError({
          statusCode: fetchError.status || 500,
          statusMessage: fetchError.statusText || "Ошибка внешнего сервера",
          data: fetchError.data,
        });
      }
    } catch (error: any) {
      console.error("Общая ошибка при обработке заявки:", {
        error: error.message,
        statusCode: error.statusCode,
        data: error.data,
        stack: error.stack,
      });

      // Пробрасываем ошибку дальше
      throw createError({
        statusCode: error.statusCode || 500,
        statusMessage: error.statusMessage || "Внутренняя ошибка сервера",
        data: error.data,
      });
    }
  }
);

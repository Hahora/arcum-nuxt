export const useCallbackModal = () => {
  const isCallbackModalOpen = ref(false);

  const openCallbackModal = () => {
    isCallbackModalOpen.value = true;
  };

  const closeCallbackModal = () => {
    isCallbackModalOpen.value = false;
  };

  return {
    isCallbackModalOpen: readonly(isCallbackModalOpen),
    openCallbackModal,
    closeCallbackModal,
  };
};

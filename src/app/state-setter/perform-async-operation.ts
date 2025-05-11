export const performAsyncOperation = (
  duration: number = 1000
): Promise<void> => {
  console.log("Starting slow async operation (simulating API call, etc.)...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Slow async operation finished.");
      resolve();
    }, duration);
  });
};

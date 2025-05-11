// Fetches data from localStorage
export const getInitialData = (): string[] => {
  console.log("Expensive initializer function called");

  const startTime = performance.now();
  while (performance.now() - startTime < 300) {}

  try {
    const storedData = localStorage.getItem("fruitsList");
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error("Error loading data from localStorage:", error);
  }

  const defaultData = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return defaultData;
};

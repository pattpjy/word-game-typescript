const url: string = "http://localhost:3001/api/v1/thai_words";
export const getAllWords = async (): Promise<any> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Word. Try Later.");
  }
  return response.json();
};

export const getRandomWordsByCategories = async (
  categories: string
): Promise<any> => {
  try {
    const queryParams = new URLSearchParams(categories);
    const response = await fetch(url + `/random?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to fetch words from selected categories");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

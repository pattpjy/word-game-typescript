const url: string = "http://localhost:3001/api/v1/thai_words";
export const getAllWords = async (): Promise<any> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Word. Try Later.");
  }
  return response.json();
};

export const getRandomWordsByCategory = async (
  category: string
): Promise<any> => {
  try {
    // fetch 6 random words from all cat
    if (category === "all") {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch words from all categories");
      }
      return response.json();
    }
    const queryParams = new URLSearchParams({ category });
    //in the future if I need to have multiple categories change parameter to URLSearchParams({ categories: categories.join(',') })

    const response = await fetch(`${url}/random?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to fetch words from selected category");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

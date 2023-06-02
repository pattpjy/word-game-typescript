export const getAllWords = async (): Promise<any> => {
  const url: string = "http://localhost:3001/api/v1/thai_words";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Word. Try Later.");
  }
  return response.json();
};

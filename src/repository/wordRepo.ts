import { getAllWords, getRandomWordsByCategory } from "../apiCall/apiCall";
import { WordData } from "../types/WordData";

export class WordDataRepository {
  async getAllWords(): Promise<WordData[]> {
    try {
      const data = await getAllWords();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch word data");
    }
  }
  async getWordsByCategory(category: string): Promise<WordData[]> {
    try {
      const data = await getRandomWordsByCategory(category);
      return data;
    } catch (error) {
      throw new Error("Failed to fetch word data");
    }
  }
}

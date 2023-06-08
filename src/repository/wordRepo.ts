import { getAllWords } from "../apiCall/apiCall";
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
}

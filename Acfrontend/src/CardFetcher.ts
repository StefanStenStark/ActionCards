export type card = {
  id?: number;
  type: string;
  title: string;
  instruction: string;
};
const url: string = "http://localhost:5204/api/ActionCards";

export async function fetchCardData(): Promise<card[]> {
  // Ensure return type
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: card[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
}

export async function fetchCardsByType(type: string): Promise<card[]> {
  const urlByType = `http://localhost:5204/api/ActionCards/bytype/${type}`;

  try {
    const response: Response = await fetch(urlByType);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: card[] = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching data for type "${type}":`, error);
    return [];
  }
}

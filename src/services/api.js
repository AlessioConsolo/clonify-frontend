import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Funzione per ottenere tutte le canzoni
export const getSongs = async () => {
  try {
    const response = await api.get("/songs");
    return response.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
};

import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Funzione per il login
export const login = async (email, password) => {
  try {
    const response = await authApi.post("/login", { email, password });
    localStorage.setItem("token", response.data.token); // Salva il token
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};

// Funzione per registrare un nuovo utente
export const register = async (name, email, password) => {
  try {
    const response = await authApi.post("/register", { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

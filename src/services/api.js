import axios from "axios";

// Crea un'istanza di Axios per tutte le chiamate API
const api = axios.create({
  baseURL: "http://localhost:8000/api", // Assicurati che l'URL del tuo backend sia corretto
  headers: {
    "Content-Type": "application/json",
  },
});

// Canzoni (Songs)
export const getSongs = () => {
  return api.get("/songs");
};

export const getSong = (id) => {
  return api.get(`/songs/${id}`);
};

export const addSong = (songData) => {
  return api.post("/songs", songData);
};

export const updateSong = (id, songData) => {
  return api.put(`/songs/${id}`, songData);
};

export const deleteSong = (id) => {
  return api.delete(`/songs/${id}`);
};

// Album
export const getAlbums = () => {
  return api.get("/albums");
};

export const getAlbum = (id) => {
  return api.get(`/albums/${id}`);
};

export const addAlbum = (albumData) => {
  return api.post("/albums", albumData);
};

export const updateAlbum = (id, albumData) => {
  return api.put(`/albums/${id}`, albumData);
};

export const deleteAlbum = (id) => {
  return api.delete(`/albums/${id}`);
};

// Generi (Genres)
export const getGenres = () => {
  return api.get("/genres");
};

export const getGenre = (id) => {
  return api.get(`/genres/${id}`);
};

export const addGenre = (genreData) => {
  return api.post("/genres", genreData);
};

export const updateGenre = (id, genreData) => {
  return api.put(`/genres/${id}`, genreData);
};

export const deleteGenre = (id) => {
  return api.delete(`/genres/${id}`);
};

// Playlist
export const getPlaylists = () => {
  return api.get("/playlists");
};

export const getPlaylist = (id) => {
  return api.get(`/playlists/${id}`);
};

export const addPlaylist = (playlistData) => {
  return api.post("/playlists", playlistData);
};

export const updatePlaylist = (id, playlistData) => {
  return api.put(`/playlists/${id}`, playlistData);
};

export const deletePlaylist = (id) => {
  return api.delete(`/playlists/${id}`);
};

export default api;

import axios from "axios";

const API_KEY = "e57746b2e4fe98cb5cc839cb405a15f1";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchAPI() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.error("getTrendingFilms error" + error);
  }
}

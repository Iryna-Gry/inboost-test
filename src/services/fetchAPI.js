import axios from "axios";

const API_KEY = "cUWRhdIILdW7XMnmojt8km";
const BASE_URL = "https://quintadb.com/apps/";

export async function fetchAPI() {
  try {
    const response = await axios.get(
      `${
        BASE_URL + API_KEY
      }/dtypes/entity/ckeNJdOIDol4kAW4ddK8kT.json?rest_api_key=bOW5pdJXTlW7nYWQZdUCke&amp;view=`
    );
    console.log(response.data.records);
    return response.data.records;
  } catch (error) {
    console.error("getTrendingFilms error" + error);
  }
}

import axios from "axios";
import Photo from "../../src/components/App/App.type";

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "UOB7k7dbf0ho9w16EFpuYoAu4izBwqloeRx7yFlslV8";

export async function fetchPhotos(query:string, page:number = 0):Promise<Photo[]> {
const {data } = await axios(`${BASE_URL}`, {
    params: {
      client_id: API_KEY,
      query: query,
      page,
      per_page: 15,
    },
  });
  return data.results;
}



import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "32a452f4bbmsh3f09250ab34ee28p13eb29jsn2a516c670511",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

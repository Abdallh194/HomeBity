import axios from "axios";

const BASE_URL = "https://bayut.p.rapidapi.com";
const options = {
  headers: {
    "x-rapidapi-key": "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
    "x-rapidapi-host": "bayut.p.rapidapi.com",
  },
};

export const FetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

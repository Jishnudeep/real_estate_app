import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "dd1dedcfddmsh1b14377b32a8d3cp1239c4jsnba873e778009",
    },
  });
  return data;
};

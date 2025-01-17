import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com/",
  params: { format: "json",date: '2020-04-07' },
  headers: {
    "x-rapidapi-key": "5a56265c38msh86935356e173491p129c35jsn6beefb15f6db",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

export default api;

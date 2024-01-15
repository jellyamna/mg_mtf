import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  //return axios.get("https://mg-api-fu5l.onrender.com/account");
  //return axios.get("https://www.api.mgcanalis.tech/account");
   return axios.get("https://api-08az.onrender.com/account");
 // return axios.get("http://localhost:4000/account");
};

export const useDataMg = (onSuccess, onError) => {
  return useQuery("data-mandiri", fetchSuperHeroes, {
    onError,
    onSuccess,
    refetchInterval: 20000,
    refetchIntervalInBackground: true,
    // cacheTime: 1000,
    refetchOnWindowFocus: true,
  });
};

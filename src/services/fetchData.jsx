import { useEffect, useState } from "react";

const BASE_URL = "https://zomato-express.prerananawar.repl.co/restaurants";

export const FetchData = (url = "", params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setIsLoading(true);
        let res = await fetch(BASE_URL + url, params);
        setIsLoading(false);
        let data = await res.json();
        setData(data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setError(error);
      }
    };

    fetchRestaurants();
  }, [url, params]);

  return {
    data,
    isLoading,
    error,
  };
};

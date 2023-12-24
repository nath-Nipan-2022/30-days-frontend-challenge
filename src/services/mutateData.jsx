import { useState } from "react";
const BASE_URL = "https://zomato-express.prerananawar.repl.co/restaurants";
export const MutateData = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);

  const action = async (url = "", params) => {
    try {
      setSuccess("");
      setIsLoading(true);
      let res = await fetch(BASE_URL + url, params);
      if (!res.ok) {
        throw res.statusText;
      }
      setIsLoading(false);
      setSuccess("success");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setError(error);
    }
  };

  return {
    action,
    isLoading,
    success,
    error,
  };
};

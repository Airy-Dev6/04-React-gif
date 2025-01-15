import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setgifs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    getGifs(category).then((newArrImg) => setgifs(newArrImg));
    setisLoading(false);
  }, []);

  return {
    gifs,
    isLoading,
  };
};

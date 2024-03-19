import React, { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/Products";
import fetchMoveis from "../../api/fetchMoveis";
import Card from "../Card";

const Movies = () => {
  const [movies, setMovies] = useState<IProduct[]>();

  useEffect(() => {
    fetchMoveis('movies').then((response) => {
      setMovies(response)
    })
  }, []);

  return(
    <>
      {movies?.map(movie => (
        <Card 
          id={movie.id}
          title={movie.title}
          price={movie.price}
          image={movie.image} />
      ))}
    </>
  );
}

export default Movies;
import React, { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/Products";
import fetchMoveis from "../../api/fetchMoveis";
import Card from "../Card";
import Loading from "../Loading";

const Movies = () => {
  const [movies, setMovies] = useState<IProduct[]>();
  const [loading, setlLoading] = useState(true);

  useEffect(() => {
    fetchMoveis('movies').then((response) => {
      setMovies(response);
      setlLoading(false);
    })
  }, []);

  return(
    (loading && <Loading />) || (
      <>
        {movies?.map(movie => (
          <Card 
            id={movie.id}
            title={movie.title}
            price={movie.price}
            image={movie.image}
          />
        ))}
      </>
    )
    
  );
}

export default Movies;
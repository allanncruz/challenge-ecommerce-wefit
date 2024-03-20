import { useEffect, useState } from "react";
import fetchMoveis from "../../api/fetchMoveis";
import Card from "../Card";
import Loading from "../Loading";
import { IData } from "../../interfaces/Moveis";

const Movies = () => {
  const [movies, setMovies] = useState<IData[]>();
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
            key={movie.id}
            data={movie}
          />
        ))}
      </>
    )
    
  );
}

export default Movies;
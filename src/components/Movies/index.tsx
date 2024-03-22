import { useEffect, useState } from "react";
import Loading from "../Loading";
import { IData } from "../../interfaces/Movies";
import { useMovieContext } from "../../context/Provider";
import fetchMovies from "../../api/fetchMovies";
import Card from "../Card";



const Movies = () => {
  const { addMovie } = useMovieContext();
  const [movies, setMovies] = useState<IData[]>();
  const [loading, setlLoading] = useState(true);

  useEffect(() => {
    fetchMovies('movies').then((response) => {
      setMovies(response);
      setlLoading(false);
    })
  }, []);

  return(
    (loading && <Loading />) || (
      <>
        {movies?.map(movie => (
          <>
            <Card
              key={movie.id}
              data={movie}
              onClick={() => addMovie(movie)}
            />
          </>
        ))}
      </>
    )
    
  );
}

export default Movies;
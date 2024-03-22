import { useEffect, useState } from "react";
import Loading from "../Loading";
import { IData } from "../../interfaces/Movies";
import Button from "../Button";
import { CartAdd } from "../Icons";
import { useMovieContext } from "../../context/Provider";
import { CardContainer } from "./style";
import fetchMovies from "../../api/fetchMovies";



const Movies = () => {
  const { countQuantityButton, addMovie } = useMovieContext();
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
          <CardContainer key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h5>{movie.title}</h5>
            <span>R$ {movie.price}</span>
            <Button onClick={() => addMovie(movie)}>
              <CartAdd />
                            ADICIONAR AO CARRINHO
            </Button>
          </CardContainer>
        ))}
      </>
    )
    
  );
}

export default Movies;
import { useEffect, useState } from "react";
import fetchMoveis from "../../api/fetchMoveis";
import Loading from "../Loading";
import { IData } from "../../interfaces/Moveis";
import Button from "../Button";
import { CartAdd } from "../Icons";
import { CardContainer } from "../Card/style";
import { useMovieContext } from "../../context/Provider";



const Movies = () => {
  const { addMovie } = useMovieContext();
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
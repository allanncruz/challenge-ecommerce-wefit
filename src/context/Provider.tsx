import { ReactNode, useContext, useState } from "react";
import { IData } from "../interfaces/Moveis";
import { MovieContext } from "./MovieContext";

interface BaseProviderProps {
  children?: ReactNode;
}

const MovieProvider: React.FC<BaseProviderProps> = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState<IData[]>([]);

  const addMovie = (movie: IData) => {
    setSelectedMovies([...selectedMovies, movie]);
  };

  const removeMovie = (movieId: number) => {
    setSelectedMovies(selectedMovies.filter(item => item.id !== movieId));
  };

  return (
    <MovieContext.Provider value={{ selectedMovies, addMovie, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieProvider;
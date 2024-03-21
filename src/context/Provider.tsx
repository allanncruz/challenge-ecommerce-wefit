import { useContext, useState } from "react";
import { BaseProviderProps, IData } from "../interfaces/Moveis";
import { MovieContext } from "./MovieContext";


const MovieProvider: React.FC<BaseProviderProps> = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState<IData[]>([]);

  const addMovie = (movie: IData) => {
    setSelectedMovies([...selectedMovies, movie]);
  };

  const removeMovie = (movieId: number) => {
    setSelectedMovies(selectedMovies.filter(item => item.id !== movieId));
  };

  const clearSelectedMovie = () => {
    setSelectedMovies([]);
  }

  return (
    <MovieContext.Provider value={{ selectedMovies, addMovie, removeMovie, clearSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieProvider;
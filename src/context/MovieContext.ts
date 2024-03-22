import { createContext } from 'react';
import { MovieContextType } from "../interfaces/Movies";

export const MovieContext = createContext<MovieContextType>({
  selectedMovies: [],
  addMovie: () => {},
  removeMovie: () => {},
  clearSelectedMovie: () => {}
});
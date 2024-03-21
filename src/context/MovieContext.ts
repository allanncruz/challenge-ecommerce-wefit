import { createContext } from 'react';
import { MovieContextType } from "../interfaces/Moveis";

export const MovieContext = createContext<MovieContextType>({
  selectedMovies: [],
  addMovie: () => {},
  removeMovie: () => {},
  clearSelectedMovie: () => {}
});
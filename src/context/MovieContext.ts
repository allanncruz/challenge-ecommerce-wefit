import { createContext } from 'react';

import { IData } from "../interfaces/Moveis";

interface MovieContextType {
  selectedMovies: IData[];
  addMovie: (movie: IData) => void;
}

export const MovieContext = createContext<MovieContextType>({
  selectedMovies: [],
  addMovie: () => {},
});
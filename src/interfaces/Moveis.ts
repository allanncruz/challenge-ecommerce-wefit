import { ReactNode } from "react";

export type IData = {
  id: number,
  title: string,
  price: number,
  image: string
}

export interface IMovies {
  data: IData[]
}

export interface ButtonProps {
  typeButton?: any;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface MovieContextType {
  selectedMovies: IData[];
  addMovie: (movie: IData) => void;
  removeMovie: (movieId: number) => void;
  clearSelectedMovie: () => void;
}

export interface ICartItem {
  image: string,
  title: string,
  price: number,
  removeMovies: () => void;
}

export interface BaseProviderProps {
  children?: ReactNode;
}
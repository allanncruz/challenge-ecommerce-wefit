export type IData = {
  id?: number,
  title: string,
  price: number,
  image: string
}

export interface IMovies {
  data: IData[]
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}
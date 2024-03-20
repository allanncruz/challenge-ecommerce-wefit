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
  typeButton?: any;
  onClick?: () => void;
  children: React.ReactNode;
}
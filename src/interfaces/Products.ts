export interface IProduct {
  id?: number,
  title: string,
  price: number,
  image: string
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}
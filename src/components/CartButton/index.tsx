import { useEffect, useState } from "react";
import { ShoppingCart } from "../Icons";
import { CartButtonStyle } from "./style";

const CartButton = () => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const fetchMovies = () => {
      const storedMovies = localStorage.getItem('cart');
      if (storedMovies) {
        setMovies(JSON.parse(storedMovies));
      }
    };

    fetchMovies();
  }, []);


  return(
    <CartButtonStyle>
      <div>
        Meu Carrinho
        <small>{movies.length} itens</small>
      </div>
      <ShoppingCart />
    </CartButtonStyle>
  );
}

export default CartButton
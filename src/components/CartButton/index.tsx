import { ShoppingCart } from "../Icons";
import { CartButtonStyle } from "./style";
import { useMovieContext } from "../../context/Provider";

const CartButton = () => {
  const { selectedMovies } = useMovieContext();

  return(
    <CartButtonStyle>
      <div>
        Meu Carrinho
        <small>{selectedMovies.length} itens</small>
      </div>
      <ShoppingCart />
    </CartButtonStyle>
  );
}

export default CartButton
import { ShoppingCart } from "../Icons";
import { CartButtonStyle } from "./style";

const CartButton = () => {

  return(
    <CartButtonStyle>
      <div>
        Meu Carrinho
        <small>0 itens</small>
      </div>
      <ShoppingCart />
    </CartButtonStyle>
  );
}

export default CartButton
import { useState } from "react";
import { CartCount, CartFooter, CartItem, CartMovie, CartAmount, CartTotalizing, Container, Price } from "./style";
import { Add, Delet, Trash } from "../../components/Icons";
import Button from "../../components/Button";

const Cart = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <Container>
      <CartItem>
        <CartMovie>
          <span>Produto</span>
          <img src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png" alt="" />
          <div>
            <h5>Homem Aranha</h5>
            <Price>R$ 29,99</Price>
          </div>
        </CartMovie>
        <CartCount>
          <span>Qtd</span>
          <button onClick={decrement}>
            <Delet />
          </button>
          <input type="text" value={count} />
          <button onClick={increment}>
            <Add />
          </button>
        </CartCount>
        <CartTotalizing>
          <span>Subtotal</span>
          <Price>R$ 29,99</Price>
          <Trash />
        </CartTotalizing>
      </CartItem>
      <hr />
      <CartFooter>
        <Button>FINALIZAR PEDIDO</Button>
        <CartAmount>
          <small>TOTAL</small>
          R$ 29,90
        </CartAmount>
      </CartFooter>
    </Container>
  );
}

export default Cart;
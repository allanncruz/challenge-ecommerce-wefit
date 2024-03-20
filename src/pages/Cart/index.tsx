import { useEffect, useState } from "react";
import { CartCount, CartFooter, CartItem, CartMovie, CartAmount, CartTotalizing, Container, EmptyState, Price } from "./style";
import { Add, Delet, Trash } from "../../components/Icons";
import Button from "../../components/Button";
import { IData } from "../../interfaces/Moveis";
import EmptyImg from "../../assets/empty.png";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchUserData = () => {
      const storedUserData = localStorage.getItem('cart');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    };

    fetchUserData();
  }, []);

  const removeUserData = (index: number) => {
    const updatedUserDataList = [...userData];
    updatedUserDataList.splice(index, 1);
    setUserData(updatedUserDataList);

    localStorage.setItem('cart', JSON.stringify(updatedUserDataList));
  };

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
      {userData ? (
        <>
          {userData?.map((movie, index) => (
            <>
              <CartItem>
                <CartMovie>
                  <span>Produto</span>
                  <img src={movie.image} alt="" />
                  <div>
                    <h5>{movie.title}</h5>
                    <Price>{movie.price}</Price> 
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
                  <button onClick={() => removeUserData(index)}><Trash /></button>
                </CartTotalizing>
              </CartItem> 
              <hr />
            </>
          ))};
        <CartFooter>
          <Button>FINALIZAR PEDIDO</Button>
          <CartAmount>
            <small>TOTAL</small>
            R$ 29,90
          </CartAmount>
        </CartFooter>
        </>
      ) : (
      <EmptyState>
        <h2>Parece que não há nada por aqui :(</h2>
        <img src={EmptyImg} alt="Parece que não há nada por aqui :(" />

        <Button>Recarregar página</Button>
      </EmptyState>
      )};
      
    </Container>
  );
}

export default Cart;
import { useEffect, useState } from "react";
import { CartCount, CartFooter, CartItem, CartMovie, CartAmount, CartTotalizing, Container, EmptyState, Price } from "./style";
import { Add, Delet, Trash } from "../../components/Icons";
import Button from "../../components/Button";
import { IData } from "../../interfaces/Moveis";
import EmptyImg from "../../assets/empty.png";

const Cart = () => {
  const [countQuantity, setCountQuantity] = useState(0);
  const [movies, setMovies] = useState<IData[]>([]);

  useEffect(() => {
    const fetchMovies = () => {
      const storedMovies = localStorage.getItem('cart');
      if (storedMovies) {
        setMovies(JSON.parse(storedMovies));
      }
    };

    fetchMovies();
  }, []);

  const removeMovies = (index: number) => {
    const updatedMoviesList = [...movies];
    updatedMoviesList.splice(index, 1);
    setMovies(updatedMoviesList);

    localStorage.setItem('cart', JSON.stringify(updatedMoviesList));
  };

  const totalPrice = movies.reduce((acc, movie) => {
    return acc + movie.price;
  }, 0);

  const addQuantity = () => {
    setCountQuantity(countQuantity + 1);
  };

  const removeAuantity = () => {
    if (countQuantity > 0) {
      setCountQuantity(prevCount => prevCount - 1);
    }
  };

  return (
    <Container>
      {movies && totalPrice ? (
        <>
          {movies?.map((movie, index) => (
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
                  <button onClick={removeAuantity}>
                    <Delet />
                  </button>
                  <input type="text" value={countQuantity} />
                  <button onClick={addQuantity}>
                    <Add />
                  </button>
                </CartCount>
                <CartTotalizing>
                  <span>Subtotal</span>
                  <Price>R$ 29,99</Price>
                  <button onClick={() => removeMovies(index)}><Trash /></button>
                </CartTotalizing>
              </CartItem> 
              <hr />
            </>
          ))};
        <CartFooter>
          <Button>FINALIZAR PEDIDO</Button>
          <CartAmount>
            <small>TOTAL</small>
            R${totalPrice.toFixed(2)}
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
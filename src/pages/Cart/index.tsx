import { useEffect, useState } from "react";
import { CartCount, CartFooter, CartItem, CartMovie, CartAmount, CartTotalizing, Container, EmptyState } from "./style";
import { Add, Delet, Trash } from "../../components/Icons";
import Button from "../../components/Button";
import { IData } from "../../interfaces/Moveis";
import EmptyImg from "../../assets/empty.png";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [countQuantity, setCountQuantity] = useState(0);
  const [movies, setMovies] = useState<IData[]>([]);
  const navigate = useNavigate();

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

  const handleConfired = () => {
    localStorage.removeItem('cart');

    navigate('/pedido-confirmado');
  }

  const navigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <Container>
      {movies && totalPrice ? (
        <>
          {movies?.map((movie, index) => (
            <>
              <CartItem>
                <CartMovie>
                  <img src={movie.image} alt="" />
                  <div>
                    <h5>{movie.title}</h5>
                    <span>R$ {movie.price}</span> 
                  </div>
                </CartMovie>
                <CartCount>
                  <button onClick={removeAuantity}>
                    <Delet />
                  </button>
                  <input type="text" value={countQuantity} />
                  <button onClick={addQuantity}>
                    <Add />
                  </button>
                </CartCount>
                <CartTotalizing>
                  <div>
                    <span>R$ 29,99</span>
                    <button onClick={() => removeMovies(index)}><Trash /></button>
                  </div>
                  <div>
                    <small>SUBTOTAL</small>
                    <span>R$ 29,99</span>
                  </div>
                </CartTotalizing>
              </CartItem> 
              <hr />
            </>
          ))}
        <CartFooter>
          <Button onClick={handleConfired}>FINALIZAR PEDIDO</Button>
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

        <Button onClick={() => navigateTo('/carrinho')}>Recarregar página</Button>
      </EmptyState>
      )}
      
    </Container>
  )
}

export default Cart;
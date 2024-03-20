import { useEffect, useState } from "react";
import { CartFooter, CartAmount, Container, EmptyState } from "./style";
import Button from "../../components/Button";
import { IData } from "../../interfaces/Moveis";
import EmptyImg from "../../assets/empty.png";
import { useNavigate } from 'react-router-dom';
import CartItem from "../../components/CartItem";

const Cart = () => {
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
              <CartItem
                image={movie.image}
                title={movie.title}
                price={movie.price}
                removeMovies={() => removeMovies(index)}
              />
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
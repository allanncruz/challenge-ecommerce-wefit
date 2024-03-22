import { CartFooter, CartAmount, Container, EmptyState } from "./style";
import Button from "../../components/Button";
import EmptyImg from "../../assets/empty.png";
import { useNavigate } from 'react-router-dom';
import CartItem from "../../components/CartItem";
import { useMovieContext } from "../../context/Provider";

const Cart = () => {
  const { selectedMovies, removeMovie, clearSelectedMovie } = useMovieContext();
  const navigate = useNavigate();

  const totalPrice = selectedMovies.reduce((acc, movie) => {
    return acc + movie.price;
  }, 0);

  const handleConfirmed = () => {
    clearSelectedMovie();
    navigate('/pedido-confirmado');
  }

  const navigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <Container>
      {selectedMovies.length > 0 ? (
        <>
          {selectedMovies?.map((movie) => (
            <>
              <CartItem
                image={movie.image}
                title={movie.title}
                price={movie.price}
                removeMovies={() => removeMovie(movie.id)}
              />
              <hr />
            </>
          ))}
          <CartFooter>
            <Button onClick={handleConfirmed}>FINALIZAR PEDIDO</Button>
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
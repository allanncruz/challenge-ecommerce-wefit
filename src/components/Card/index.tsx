import { IData } from "../../interfaces/Moveis";
import Button from "../Button";
import { CartAdd } from "../Icons";
import { CardContainer } from "./style";

const Card = ({data}: any) => {
  const {id, title, price, image} = data;

  const handleClickMovei = (Movei: IData) => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCartItems = [...cartItems, Movei];
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));

    window.location.reload();
  };

  return(
    <CardContainer key={id}>
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <span>R$ {price}</span>
      <Button onClick={() => handleClickMovei(data)}>
        <CartAdd />
        ADICIONAR AO CARRINHO
      </Button>
    </CardContainer>
  );
}

export default Card;
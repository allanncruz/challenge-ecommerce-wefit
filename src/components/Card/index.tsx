import { useState } from "react";
import Button from "../Button";
import { CartAdd } from "../Icons";
import { CardContainer } from "./style";
import { IData } from "../../interfaces/Movies";

const Card = ({data, onClick}: any) => {
  const {id, title, price, image} = data;
  const [countQuantityButton, setCountQuantityButton] = useState(0);
  const [activeButton, setActiveButton] = useState('');

  const handleAddCart = (data: IData) => {
    onClick(data);
    setCountQuantityButton(countQuantityButton + 1);
    setActiveButton('active');
  };

  return(
    <CardContainer key={id}>
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <span>R$ {price}</span>
      <Button className={activeButton} onClick={() => handleAddCart(data)}>
        <CartAdd />
        <small>{countQuantityButton}</small>
        ADICIONAR AO CARRINHO
      </Button>
    </CardContainer>
  );
}

export default Card;
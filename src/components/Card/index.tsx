import React from "react";
import { IProduct } from "../../interfaces/Products";
import { CardContainer } from "./style";
import Button from "../Button";

const Card: React.FC<IProduct> = ({
  id,
  title,
  price,
  image
}
) => {

  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return(
    <CardContainer>
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <span>R$ {price}</span>
      <Button onClick={handleClick}>ADICIONAR AO CARRINHO</Button>
    </CardContainer>
  );
}

export default Card;
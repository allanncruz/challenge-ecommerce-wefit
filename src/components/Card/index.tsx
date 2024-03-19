import React from "react";
import { IProduct } from "../../interfaces/Products";
import Button from "../Button";
import { CartAdd } from "../Icons";
import { CardContainer } from "./style";

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
    <CardContainer key={id}>
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <span>R$ {price}</span>
      <Button onClick={handleClick}>
        <CartAdd />
        ADICIONAR AO CARRINHO
      </Button>
    </CardContainer>
  );
}

export default Card;
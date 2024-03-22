import { useState } from "react";
import {CartItemStyled, CartCount, CartMovie, CartTotalizing } from "./style";
import { Add, Delet, Trash } from "../../components/Icons";
import { ICartItem } from "../../interfaces/Movies";


const CartItem = ({image, title, price, removeMovies}: ICartItem) => {
  const [countQuantity, setCountQuantity] = useState(1);


  const addQuantity = () => {
    setCountQuantity(countQuantity + 1);
  };

  const removeAuantity = () => {
    if (countQuantity > 0) {
      setCountQuantity(prevCount => prevCount - 1);
    }
  };

  return (
    <CartItemStyled>
      <CartMovie>
        <img src={image} alt="" />
        <div>
          <h5>{title}</h5>
          <span>R$ {price}</span> 
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
          <span>R$ {price * countQuantity}</span>
          <button onClick={removeMovies}><Trash /></button>
        </div>
        <div>
          <small>SUBTOTAL</small>
          <span>R$ {price * countQuantity}</span>
        </div>
      </CartTotalizing>
    </CartItemStyled> 
  )
}

export default CartItem;
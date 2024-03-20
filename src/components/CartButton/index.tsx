import { useEffect, useState } from "react";
import { ShoppingCart } from "../Icons";
import { CartButtonStyle } from "./style";

const CartButton = () => {
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    const fetchUserData = () => {
      const storedUserData = localStorage.getItem('cart');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    };

    fetchUserData();
  }, []);


  return(
    <CartButtonStyle>
      <div>
        Meu Carrinho
        <small>{userData.length} itens</small>
      </div>
      <ShoppingCart />
    </CartButtonStyle>
  );
}

export default CartButton
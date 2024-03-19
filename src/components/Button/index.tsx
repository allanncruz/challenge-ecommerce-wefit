import React from 'react';
import { StyledButton } from './style';
import { ButtonProps } from '../../interfaces/Products';
import { CartAdd } from '../Icons';


const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>
    <CartAdd />
    {children}
  </StyledButton>;
};

export default Button;
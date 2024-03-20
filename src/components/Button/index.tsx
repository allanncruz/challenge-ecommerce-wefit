import React from 'react';
import { StyledButton } from './style';
import { ButtonProps } from '../../interfaces/Moveis';


const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>
    {children}
  </StyledButton>;
};

export default Button;
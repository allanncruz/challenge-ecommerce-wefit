import React from 'react';
import { StyledButton } from './style';
import { ButtonProps } from '../../interfaces/Movies';


const Button: React.FC<ButtonProps> = ({ typeButton, onClick, children }) => {
  return <StyledButton type={typeButton} onClick={onClick}>
    {children}
  </StyledButton>;
};

export default Button;
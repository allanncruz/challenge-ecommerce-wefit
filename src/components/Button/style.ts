import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 13px 40px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #009EDD;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
`;
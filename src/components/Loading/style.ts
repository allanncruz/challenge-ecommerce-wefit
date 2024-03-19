import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  margin: 100px 0 auto;
  animation: ${rotate} 1s linear infinite;
  position: absolute;
  width: 100%;
  text-align: center;

`

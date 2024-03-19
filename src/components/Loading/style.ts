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
  margin: 100px 0 auto;
  animation: ${rotate} 1s linear infinite;
  position: absolute;
  text-align: center;
  width: 100%;
  left: 0;
  img {
    width: 64px;
    height: 64px;
  }

`

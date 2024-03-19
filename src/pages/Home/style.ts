import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 24px auto;
  max-width: 1140px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

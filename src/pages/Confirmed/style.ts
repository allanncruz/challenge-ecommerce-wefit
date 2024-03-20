import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px 20px 20px;
  margin: 24px auto;
  max-width: 1100px;
  width: 95%;
  background-color: #fff;
  border-radius: 4px;
  position: relative;

  hr {
    margin: 35px 0;
  }
`

export const EmptyState = styled.div`
  padding: 20px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-size: 20px;
    text-align: center;
  }

  img {
    margin: 40px 0;
  }
`
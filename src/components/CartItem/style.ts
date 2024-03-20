import styled from "styled-components"

export const CartItemStyled = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`

export const CartMovie = styled.div`
  display: flex;
  align-items: center;
  max-width: 280px;
  width: 100%;
    
  img {
    width: 90px;
    margin-right: 20px;
  }

  h5{
    font-size: 14px;
    margin-bottom: 8px;
  }

  span {
    font-size: 16px;
    display: block;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    align-items: start;

    span {
      display: none;
    }
  }
`

export const CartCount = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
  }

  input {
    border: 1px solid #D9D9D9;
    width: 62px;
    border-radius: 4px;
    text-align: center;
    padding: 3px;
    margin: 0 10px;
  }

  @media (max-width: 600px) {
    align-items: end;
    margin-right: -50px;
    left: -50px;
    position: relative;
  }
`

export const CartTotalizing = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 115px;
  align-items: center;

  button {
    background-color: transparent;
  }

  span {
    font-size: 16px;
    display: block;
    font-weight: 700;
  }

  div:first-child {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  div:last-child {
    display: none;
    small {
      color: #999999;
      font-weight: 700;
    }
  }

  @media (max-width: 600px) {
    align-items: end;
    flex-direction: column;

    div:last-child {
      display: block;
    }
  }

`

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: end;

    button {
      width: 100%;
    }

    div {
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`

export const CartAmount = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;

  small {
    font-size: 14px;
    color: #999999;
    margin-right: 25px;
  }
`
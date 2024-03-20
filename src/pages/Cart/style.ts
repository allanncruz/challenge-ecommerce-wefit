import styled from 'styled-components';

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

  span{
    position: absolute;
    top: 23px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #999999;
  }
`

export const CartItem = styled.div`
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
`

export const CartCount = styled.div`
  display: flex;
  width: 100%;

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
`

export const CartTotalizing = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Price = styled.div`
  font-size: 16px;
  display: block;
  font-weight: 700;
`

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
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

export const EmptyState = styled.div`
  text-align: center;

  h2{
    font-size: 20px;
  }
`




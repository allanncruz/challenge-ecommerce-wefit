import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  padding: 24px 16px;
  margin: 24px auto;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  color: #fff;
`;

export const NavBrand = styled.a`
  font-size: 27px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

export const NavItem = styled.ul`
  display: flex;
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 14px;
  small {
    display: block;
    text-align: right;
  }
`;
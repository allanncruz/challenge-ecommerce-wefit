import {
  Container,
  Nav,
  NavBrand,
  NavItem,
  NavLink
} from './style';

const Navbar = () => {

  return(
    <Nav>
      <Container>
        <NavBrand href="/">WeMovies</NavBrand>
        <NavItem>
          <NavLink href="/carrinho">
            Meu Carrinho
            <small>0 itens</small>
          </NavLink>
        </NavItem>
      </Container>
    </Nav>
  );
}

export default Navbar;
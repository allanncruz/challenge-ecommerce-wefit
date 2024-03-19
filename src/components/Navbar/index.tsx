import CartButton from '../CartButton';
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
            <CartButton />
          </NavLink>
        </NavItem>
      </Container>
    </Nav>
  );
}

export default Navbar;
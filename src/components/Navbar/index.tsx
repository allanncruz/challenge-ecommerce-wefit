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
        <NavBrand to="/">WeMovies</NavBrand>
        <NavItem>
          <NavLink to="/carrinho">
            <CartButton />
          </NavLink>
        </NavItem>
      </Container>  
    </Nav>
  );
}

export default Navbar;
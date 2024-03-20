import { Container, EmptyState } from "./style";
import ConfirmedImg from "../../assets/confirmed.png";
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

const Confirmed = () => {
  const navigate = useNavigate();

  const navigateTo = (route: string) => {
    navigate(route);
  };


  return (
    <Container>
      <EmptyState>
        <h2>Compra realizada com sucesso!</h2>
        <img src={ConfirmedImg} alt="Parece que não há nada por aqui :(" />

        <Button onClick={() => navigateTo('/')}>Voltar</Button>
      </EmptyState>
    </Container>
  );
}

export default Confirmed;
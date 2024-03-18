import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Confirmed from './pages/Confirmed';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/pedido-confirmado" element={<Confirmed />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

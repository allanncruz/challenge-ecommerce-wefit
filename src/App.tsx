import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Confirmed from './pages/Confirmed';
import Navbar from './components/Navbar';
import MovieProvider from './context/Provider';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/pedido-confirmado" element={<Confirmed />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;

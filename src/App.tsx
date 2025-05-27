import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Checkout from './components/Checkout';


function App() {
  return (
    <Router  basename="/TP-React-MoradOulhaj">
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

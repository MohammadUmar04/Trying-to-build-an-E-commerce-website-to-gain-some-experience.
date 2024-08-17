import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import UserAccount from './Components/UserAccount';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<UserAccount />} />
      </Routes>
    </Router>
  );
}


export default App;

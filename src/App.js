import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import TopBanner from './Components/TopBanner';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import CartPage from './Pages/CartPage';
import ProductList from "./Components/ProductList";
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:categoryName" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

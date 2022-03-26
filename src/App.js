import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

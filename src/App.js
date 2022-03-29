import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';
import NotFound from './containers/notFound/NotFound';

import{ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

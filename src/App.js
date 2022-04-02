import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './containers/Home/home';

import Cart from './containers/cart/Cart';
import NotFound from './containers/notFound/NotFound';

import{ToastContainer} from 'react-toastify'
import ComputerAccessories from './containers/categories/ComputerAccessories';
import CameraPhotography from './containers/categories/CameraPhotography';
import TelephoneTablet from './containers/categories/TelephoneTablet';
import SmartHome from './containers/categories/SmartHome';
import ArtCraft from './containers/categories/ArtCraft';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/computer_accessories' element={<ComputerAccessories />}/>
        <Route path='/camera_photography' element={<CameraPhotography />}/>
        <Route path='/telephone_tablet' element={<TelephoneTablet />}/>
        <Route path='/smartHome' element={<SmartHome />}/>
        <Route path='/art_craft' element={<ArtCraft />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

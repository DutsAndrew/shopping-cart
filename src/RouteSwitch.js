import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
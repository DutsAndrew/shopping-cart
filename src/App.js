import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from "./components/Nav";
import Favorites from "./components/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Home' element={<Hero />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
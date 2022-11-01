import { Routes, Route } from "react-router-dom";

import AllProducts from "./pages/app/AllProducts";
import SingleProduct from "./pages/app/SingleProduct";
import About from "./pages/site/About";
import Contacts from "./pages/site/Contacts";
import Home from "./pages/site/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/app/products" element={<AllProducts />} />
      <Route path="/app/products/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default App;

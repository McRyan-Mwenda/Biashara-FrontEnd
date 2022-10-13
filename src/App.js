import { Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import CheckOut from './pages/CheckOut';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/singleproduct' element={<SingleProduct />} />
      <Route path='/allproducts' element={<AllProducts />} />
      <Route path='/checkout' element={<CheckOut />} />
    </Routes>
  )
}

export default App;

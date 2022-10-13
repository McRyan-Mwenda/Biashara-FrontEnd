import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const AllProducts = () => {
  return (
    <div className="container">
        <h1>AllProducts</h1>
        <Link to="/">Home</Link>
        <Link to="/allproducts">AllProducts</Link>
        <Link to="/singleproduct">SingleProduct</Link>
        <Link to="/checkout">CheckOut</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Button variant="primary">Primary</Button>{' '}
    </div>
  )
}

export default AllProducts
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import axios from "axios";

const url = "http://localhost:1337/api/products/";

//  let ourData = [];

const createData = () => {
  axios
  .post(url, {
    description: "This is a cable",
    price: "15000",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
};
const Home = () => {
  // const [products] = useState([0]);

  useEffect(() => {
    axios.get(url).then((response) => {
      // setProducts(response.data); 

      // ourData = (response.data);

      console.log(response.data);
    });
  }, []);

  return (
    <div className="container">
        <h1>Home</h1>
              
        <Link to="/">Home</Link>
        <Link to="/allproducts">AllProducts</Link>
        <Link to="/singleproduct">SingleProduct</Link>
        <Link to="/checkout">CheckOut</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Button variant="primary">Primary</Button>{' '}
        <button className="btn btn-sm btn-success" onClick={createData}>Create Data</button>
    </div>
    
  )
}

export default Home
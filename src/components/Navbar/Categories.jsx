import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const baseURL = "https://fakestoreapi.com/products/categories";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios({
      method: "GET",
      url: baseURL,
    })
      .then((response) => {
        console.log(response.data);

        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ul class="dropdown-menu">
      {loading && <p className="text-center">Loading...</p>}
      {categories.map((category, index) => {
        const list = (
          <li key={index}>
            <Link to={`/app/categories/${category}`} class="dropdown-item">
              {category}
            </Link>
          </li>
        );

        return list;
      })}
    </ul>
  );
};

export default Categories;

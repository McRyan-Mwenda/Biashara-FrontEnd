import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const baseURL = "https://fakestoreapi.com/products?limit=4";

const SampleProducts = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios({
      method: "GET",
      url: baseURL,
    })
      .then((response) => {
        console.log(response.data);

        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <div className="sample-products mt-3 mb-5">
      <div className="container d-flex align-items-center justify-content-between mb-2">
        <p className="fs-4 mx-2">Latest products</p>
        <Link
          to="/app/products"
          className="fs-6 d-flex justify-content-end mx-2 text-dark link"
        >
          View all <i class="bi bi-caret-right fs-5"></i>
        </Link>
      </div>
      {loading && <p className="text-center">Loading...</p>}
      <div className="container d-flex items-align-center">
        {!!allProducts && allProducts.length > 0 ? (
          allProducts.map((product) => {
            const list = (
              <div
                class="card m-2 shadow"
                style={{
                  width: "20rem",
                  height: "auto",
                }}
                key={product.id}
              >
                <img
                  src={product.image}
                  class="card-img-top p-2"
                  alt="sample product"
                  style={{
                    height: "300px",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title mb-1">{product.title}</h5>
                  <p className="mb-1">
                    <span className="fw-semibold">Price:</span>{" "}
                    <span className="text-success">$ {product.price}</span>
                  </p>
                  <div className="d-flex">
                    <span className="fw-semibold">Rating:</span>{" "}
                    {product.rating.rate === 5 && (
                      <>
                        <i class="bi bi-star-fill text-warning mb-2 mx-1"></i>
                      </>
                    )}
                    {product.rating.rate >= 4 && (
                      <>
                        <i class="bi bi-star-fill text-warning mb-2 mx-1"></i>
                      </>
                    )}
                    {product.rating.rate >= 3 && (
                      <>
                        <i class="bi bi-star-fill text-warning mb-2 mx-1"></i>
                      </>
                    )}
                    {product.rating.rate >= 2 && (
                      <>
                        <i class="bi bi-star-fill text-warning mb-2 mx-1"></i>
                      </>
                    )}
                    {product.rating.rate >= 1 && (
                      <>
                        <i class="bi bi-star-fill text-warning mb-2 mx-1"></i>
                      </>
                    )}
                    {product.rating.rate === 0 && (
                      <>
                        <i class="bi bi-star-fill text-warning mb-2 mx-1"></i>
                      </>
                    )}
                    <span className="mx-1">
                      {"["}
                      {Math.floor(product.rating.rate)} stars
                      {"]"}
                    </span>{" "}
                  </div>
                  <Link
                    to={`/app/products/${product.id}`}
                    class="btn btn-success container-fluid mb-3"
                  >
                    <i class="bi bi-eye"></i>{" "}
                    <span className="ml-4">View product</span>
                  </Link>
                  <button class="btn btn-warning container-fluid">
                    <i class="bi bi-cart-plus"></i>{" "}
                    <span className="ml-4">Add to cart</span>
                  </button>
                </div>
              </div>
            );

            return list;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SampleProducts;

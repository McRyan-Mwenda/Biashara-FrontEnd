import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const baseURL = "https://fakestoreapi.com/products";

const AllProducts = () => {
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
    <div className="bg-light">
      {/* navbar */}
      <Navbar />
      {/* navbar */}

      {/* page content */}
      <div className="mt-3 mb-5">
        {loading && <p className="text-center">Loading...</p>}
        <div className="container">
          <p className="fs-3 mx-4 mb-4">All products</p>
        </div>
        <div className="container d-flex items-align-center flex-wrap">
          {!!allProducts && allProducts.length > 0 ? (
            allProducts.map((product) => {
              const list = (
                <div
                  class="card m-4 shadow"
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
      {/* page content */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default AllProducts;

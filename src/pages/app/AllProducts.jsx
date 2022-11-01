import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const baseURL = "https://fakestoreapi.com/products";

const AllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState(null);

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

  const card = {
    width: "20rem",
    height: "auto",
  };

  const cardImage = {
    height: "300px",
  };

  return (
    <div className="bg-light">
      {/* navbar */}
      <Navbar />
      {/* navbar */}

      {/* page content */}
      <div className="mt-3 mb-5">
        {loading && "Loading..."}
        <br />
        <div className="container">
          <p className="fs-3 mx-4 mb-4">All products</p>
        </div>
        <div className="container d-flex items-align-center flex-wrap">
          {!!allProducts && allProducts.length > 0 ? (
            allProducts.map((product) => {
              const list = (
                <div class="card m-4 shadow" style={card} key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top p-2"
                    alt="sample product"
                    style={cardImage}
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-1">{product.title}</h5>
                    <p className="fs-5 card-text mb-1">
                      Price:{" "}
                      <span className="text-success">$ {product.price}</span>
                    </p>
                    {/* <p className="card-text">
                      <i class="bi bi-star-fill text-warning mx-1"></i>{" "}
                      {product.rating.rate}
                    </p> */}
                    <div className="d-flex">
                      Rating:{" "}
                      <span className="mx-1">
                        {Math.floor(product.rating.rate)}
                      </span>
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
                    </div>
                    <a href="/" class="btn btn-success container-fluid mb-3">
                      <i class="bi bi-eye"></i>{" "}
                      <span className="ml-4">View product</span>
                    </a>
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
            <div>
              <h1 className="text-center">No products</h1>
            </div>
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

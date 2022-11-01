import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const baseURL = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const productID = useParams();

  useEffect(() => {
    setLoading(true);

    axios({
      method: "GET",
      url: `${baseURL}/${productID.id}`,
    })
      .then((response) => {
        console.log(response.data);

        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [productID.id]);

  const card = {
    width: "fit-content",
    height: "fit-content",
  };

  const cardImage = {
    height: "auto",
    width: "auto",
  };

  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* navbar */}

      {/* page content */}
      <div className="mt-3 mb-5">
        {loading && "Loading..."}
        <br />
      </div>
      <div className="container">
        {product != null ? (
          <>
            <div className="d-flex w-75 mx-auto mb-5">
              <div class="card mx-4 shadow" style={card}>
                <img
                  src={product.image}
                  class="card-img-top p-2"
                  alt="sample product"
                  style={cardImage}
                />
              </div>
              <div className="px-4">
                <ul>
                  <li className="fs-5">
                    <span className="fw-semibold">Category: </span>{" "}
                    <a href="/">{product.category}</a>
                  </li>
                  <li className="fs-5">
                    <span className="fw-semibold">Product:</span>{" "}
                    {product.title}
                  </li>
                  <li className="fs-5">
                    <span className="fw-semibold">Price:</span>{" "}
                    <span className="text-success">$ {product.price}</span>
                  </li>
                  <li className="fs-5 d-flex">
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
                    <span className="mx-1">
                      [Rated by {product.rating.count} users]
                    </span>
                  </li>
                  <li className="fs-5">
                    <span className="fw-semibold">Description:</span>{" "}
                    {product.description}
                  </li>
                </ul>
                <button class="btn btn-warning btn-lg container-fluid my-4">
                  <i class="bi bi-cart-plus"></i>{" "}
                  <span className="ml-4">Add to cart</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* page content */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default SingleProduct;

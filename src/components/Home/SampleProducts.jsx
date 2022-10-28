const SampleProducts = () => {
  const cardWidth = {
    width: "18rem",
  };

  return (
    <div className="sample-products mt-3 mb-5">
      <div className="container d-flex align-items-center justify-content-between mb-2">
        <p className="fs-4 mx-2">Products being sold on app</p>
        <a
          href="/"
          className="fs-6 d-flex justify-content-end mx-2 text-dark link"
        >
          View all <i class="bi bi-caret-right fs-5"></i>
        </a>
      </div>
      <div className="container d-flex items-align-center">
        <div class="card mx-2" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="sample product"
          />
          <div class="card-body">
            <h5 class="card-title">Name of the product</h5>
            <p class="card-text">
              <span className="mx-1">KES 5000</span> <br />
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-half text-warning mx-1"></i>
              <i class="bi bi-star text-warning mx-1"></i>
            </p>
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
        <div class="card mx-2" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="sample product"
          />
          <div class="card-body">
            <h5 class="card-title">Name of the product</h5>
            <p class="card-text">
              <span className="mx-1">KES 5000</span> <br />
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-half text-warning mx-1"></i>
              <i class="bi bi-star text-warning mx-1"></i>
            </p>
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
        <div class="card mx-2" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="sample product"
          />
          <div class="card-body">
            <h5 class="card-title">Name of the product</h5>
            <p class="card-text">
              <span className="mx-1">KES 5000</span> <br />
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-half text-warning mx-1"></i>
              <i class="bi bi-star text-warning mx-1"></i>
            </p>
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
        <div class="card mx-2" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="card-img-top"
            alt="sample product"
          />
          <div class="card-body">
            <h5 class="card-title">Name of the product</h5>
            <p class="card-text">
              <span className="mx-1">KES 5000</span> <br />
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-fill text-warning mx-1"></i>
              <i class="bi bi-star-half text-warning mx-1"></i>
              <i class="bi bi-star text-warning mx-1"></i>
            </p>
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
      </div>
    </div>
  );
};

export default SampleProducts;

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-notes mx-auto my-10 w-50">
        <h2 className="text-center mb-3 text-light fs-3">NOW OFFERING</h2>
        <h1 className="text-center mb-3 text-light fs-1">Home Deliveries</h1>
        <h3 className="text-center mb-3 text-light fs-2">
          Fresh products to your doorstep
        </h3>
        <div className="d-flex justify-content-center align-items-center">
          <a href="/" className="btn btn-primary btn-lg mx-2">
            Shop all
          </a>
          <a href="/" className="btn btn-success btn-lg mx-2">
            Shop latest
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

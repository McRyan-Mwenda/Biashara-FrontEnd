const AppCategories = () => {
  const cardWidth = {
    width: "18rem",
  };

  return (
    <div className="popular-categories py-5">
      <div className="container d-flex align-items-center justify-content-between mb-2">
        <p className="fs-4 mx-2">Categories on app</p>
        <a
          href="/"
          className="fs-6 d-flex justify-content-end mx-2 text-dark link"
        >
          View all <i class="bi bi-caret-right fs-5"></i>
        </a>
      </div>
      <div className="container d-flex items-align-center">
        <a href="/" className="mx-2 link text-dark" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="category icon"
            className="rounded-circle mb-3 img-fluid"
          />
          <p className="text-center">Category 1</p>
        </a>
        <a href="/" className="mx-2 link text-dark" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="category icon"
            className="rounded-circle mb-3 img-fluid"
          />
          <p className="text-center">Category 1</p>
        </a>
        <a href="/" className="mx-2 link text-dark" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="category icon"
            className="rounded-circle mb-3 img-fluid"
          />
          <p className="text-center">Category 1</p>
        </a>
        <a href="/" className="mx-2 link text-dark" style={cardWidth}>
          <img
            src="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="category icon"
            className="rounded-circle mb-3 img-fluid"
          />
          <p className="text-center">Category 1</p>
        </a>
      </div>
    </div>
  );
};

export default AppCategories;

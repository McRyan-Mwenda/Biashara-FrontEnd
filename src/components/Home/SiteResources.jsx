const SiteResources = () => {
  return (
    <div className="d-flex align-items-center justify-content-center py-4 my-5">
      <div className="blog-resource rounded p-5 w-25 mx-4">
        <p className="text-center text-light rounded p-2">
          <span className="fs-3">Product notes</span> <br />
          <span className="fs-5">
            <a href="/" className="link text-light">
              Read our blog
            </a>
          </span>
        </p>
      </div>
      <div className="story-resource rounded p-5 w-25 mx-4">
        <p className="text-center text-light rounded p-2">
          <span className="fs-3">Our story</span> <br />
          <span className="fs-5">
            <a href="/" className="link text-light">
              Read more
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SiteResources;

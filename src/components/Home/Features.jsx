const Features = () => {
  return (
    <div className="features d-flex align-items-center justify-content-evenly py-4">
      <div className="feature-element d-flex alight-items-center">
        <i class="bi bi-box-seam fs-2 mx-2"></i>
        <span className="mx-2">
          Free local delivery <br />
          On all orders over KES 500
        </span>
      </div>
      <div className="feature-element d-flex alight-items-center">
        <i class="bi bi-lightning-charge fs-2 mx-2"></i>
        <span className="mx-2">
          Good quality guarantee <br />
          We have the best products
        </span>
      </div>
      <div className="feature-element d-flex alight-items-center">
        <i class="bi bi-check2-circle fs-2 mx-2"></i>
        <span className="mx-2">
          Quick and easy checkout <br />
          We don't keep you waiting
        </span>
      </div>
    </div>
  );
};

export default Features;

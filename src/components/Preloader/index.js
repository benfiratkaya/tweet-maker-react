import "./style.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner-border" role="status">
        <span className="sr-only">...</span>
      </div>
    </div>
  );
};

export default Preloader;

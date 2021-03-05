import HeaderUser from "./User";
import HeaderMoreButton from "./MoreButton";

const TweetHeader = () => {
  return (
    <div className="row align-items-center">
      <div className="col">
        <HeaderUser />
      </div>
      <div className="col-auto">
        <HeaderMoreButton />
      </div>
    </div>
  );
};

export default TweetHeader;

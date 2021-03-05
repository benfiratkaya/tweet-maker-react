import { connect } from "react-redux";

import "./style.scss";

import imgVerifiedLight from "../../../../../../images/verified-light.png";
import imgVerifiedDark from "../../../../../../images/verified-dark.png";

const UserName = ({ theme }) => {
  return (
    <span className="tweetVerifiedAccount">
      <img
        src={theme === "light" ? imgVerifiedLight : imgVerifiedDark}
        alt="Verified"
      />
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.tweet.theme,
  };
};

export default connect(mapStateToProps)(UserName);

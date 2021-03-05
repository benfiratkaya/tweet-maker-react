import { connect } from "react-redux";

import "./style.scss";

import imgMoreLight from "../../../../../images/more-light.png";
import imgMoreDark from "../../../../../images/more-dark.png";

const HeaderMoreButton = ({ theme }) => {
  return (
    <img
      className="tweetMore"
      src={theme === "light" ? imgMoreLight : imgMoreDark}
      alt="More"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.tweet.theme,
  };
};

export default connect(mapStateToProps)(HeaderMoreButton);

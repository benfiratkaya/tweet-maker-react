import { connect } from "react-redux";

import TweetHeader from "./Header";
import TweetContent from "./Content";

import "./style.scss";

const Tweet = ({ theme }) => {
  return (
    <div id="tweetPreview" className={`tweet ${theme}`}>
      <TweetHeader />
      <TweetContent />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.tweet.theme,
  };
};

export default connect(mapStateToProps)(Tweet);

import { connect } from "react-redux";

import ContentText from "./Text";
import ContentImage from "./Image";

import "./style.scss";

const TweetContent = ({ content }) => {
  return (
    <p className="tweetContent">
      <ContentText text={content.text} />
      {content.image && <ContentImage image={content.image} />}
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.tweet.content,
  };
};

export default connect(mapStateToProps)(TweetContent);

import { connect } from "react-redux";

import "./style.scss";

import imgProfile from "../../../images/profile.png";
import imgVerifiedLight from "../../../images/verified-light.png";
import imgVerifiedDark from "../../../images/verified-dark.png";
import imgMoreLight from "../../../images/more-light.png";
import imgMoreDark from "../../../images/more-dark.png";

const Tweet = ({ tweet }) => {
  return (
    <div id="tweetPreview" className="tweet">
      <div className="row align-items-center">
        <div className="col">
          <div className="media align-items-center">
            <img
              className={`tweetProfilePicture ${
                tweet.profilePhoto.frame === "circle"
                  ? "rounded-circle"
                  : "rounded"
              }`}
              src={tweet.profilePhoto.photo || imgProfile}
              alt="Profile"
            />
            <div className="media-body">
              <span className="tweetFullName">
                {tweet.name || "Name Surname"}
              </span>
              {tweet.isVerifiedAccount && (
                <span className="tweetVerifiedAccount">
                  <img
                    src={
                      tweet.theme === "light"
                        ? imgVerifiedLight
                        : imgVerifiedDark
                    }
                    alt="Verified"
                  />
                </span>
              )}
              <span className="tweetUsername">
                @{tweet.username || "username"}
              </span>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <img
            className="tweetMore"
            src={tweet.theme === "light" ? imgMoreLight : imgMoreDark}
            alt="More"
          />
        </div>
      </div>
      <p className="tweetContent">
        {tweet.content.text || "Write content."}
        {tweet.content.image && <img src={tweet.content.image} alt="Select" />}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tweet: state.tweet,
  };
};

export default connect(mapStateToProps)(Tweet);

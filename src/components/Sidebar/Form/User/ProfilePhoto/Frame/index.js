import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { updateTweetAction } from "../../../../../../redux/actions/tweet";

const FrameSettings = ({ user, updateTweet }) => {
  const { t } = useTranslation("sidebar");
  return (
    <div className="form-group row">
      <label htmlFor="frame" className="col-sm-4 col-form-label">
        {t("frame")}
      </label>
      <div className="col-sm-8">
        <select
          className="form-control"
          id="tweetProfilePhotoFrame"
          name="tweetProfilePhotoFrame"
          value={user.profilePhoto.frame}
          onChange={(e) =>
            updateTweet({
              user: {
                ...user,
                profilePhoto: {
                  ...user.profilePhoto,
                  frame: e.target.value,
                },
              },
            })
          }
        >
          <option value="circle">{t("frame-circle")}</option>
          <option value="rounded">{t("frame-rounded")}</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.tweet.user,
  };
};

const mapDispatchToProps = {
  updateTweet: updateTweetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameSettings);

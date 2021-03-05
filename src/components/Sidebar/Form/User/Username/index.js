import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { updateTweetAction } from "../../../../../redux/actions/tweet";

const UsernameSettings = ({ user, updateTweet }) => {
  const { t } = useTranslation("sidebar");
  return (
    <div className="form-group">
      <label htmlFor="accountUsername">{t("username")}</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">@</div>
        </div>
        <input
          type="text"
          id="accountUsername"
          className="form-control"
          placeholder={t("username-placeholder")}
          value={user.username || ""}
          onChange={(e) =>
            updateTweet({ user: { ...user, username: e.target.value } })
          }
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(UsernameSettings);

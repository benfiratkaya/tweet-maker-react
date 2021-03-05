import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { updateTweetAction } from "../../../../../redux/actions/tweet";

const NameSettings = ({ user, updateTweet }) => {
  const { t } = useTranslation("sidebar");

  return (
    <div className="form-group">
      <label htmlFor="accountName">{t("name")}</label>
      <input
        type="text"
        id="accountName"
        className="form-control"
        placeholder={t("name-placeholder")}
        value={user.name || ""}
        onChange={(e) =>
          updateTweet({ user: { ...user, name: e.target.value } })
        }
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(NameSettings);

import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { updateTweetAction } from "../../../../redux/actions/tweet";

const ThemeSettings = ({ theme, updateTweet }) => {
  const { t } = useTranslation("sidebar");
  return (
    <div className="form-group">
      <label htmlFor="tweetTheme">{t("tweet-theme")}</label>
      <select
        className="form-control"
        id="tweetTheme"
        name="tweetTheme"
        value={theme}
        onChange={(e) => updateTweet({ theme: e.target.value })}
      >
        <option value="light">{t("tweet-theme-light")}</option>
        <option value="dark">{t("tweet-theme-dark")}</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.tweet.theme,
  };
};

const mapDispatchToProps = {
  updateTweet: updateTweetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSettings);

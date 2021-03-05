import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { updateTweetAction } from "../../../../../redux/actions/tweet";

const TextSettings = ({ content, updateTweet }) => {
  const { t } = useTranslation("sidebar");
  return (
    <div className="form-group">
      <label htmlFor="tweetContent">{t("content")}</label>
      <textarea
        type="text"
        id="tweetContent"
        className="form-control"
        placeholder={t("content-placeholder")}
        rows="3"
        value={content.text || ""}
        onChange={(e) =>
          updateTweet({
            content: { ...content, text: e.target.value },
          })
        }
      ></textarea>
      <small id="tweetContentHelp" className="form-text text-muted">
        {t("content-tip")}
      </small>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.tweet.content,
  };
};

const mapDispatchToProps = {
  updateTweet: updateTweetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextSettings);

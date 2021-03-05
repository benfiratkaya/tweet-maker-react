import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";

import { updateTweetAction } from "../../../../../redux/actions/tweet";

import imgSelect from "../../../../../images/select.png";

const ImageSettings = ({ content, updateTweet }) => {
  const { t } = useTranslation("sidebar");
  const selectedImagePreview = (input) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        updateTweet({ content: { ...content, image: e.target.result } });
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <div>
      <div className="form-group">
        <label
          className="d-flex align-items-center"
          htmlFor="tweetContentImage"
        >
          <span className="mr-2">{t("content-image")}</span>
          <Switch
            id="tweetContentImage"
            onChange={(checked) =>
              updateTweet({
                content: {
                  ...content,
                  image: checked ? imgSelect : null,
                },
              })
            }
            checked={content.image || false}
          />
        </label>
        <small id="tweetContentImageHelp" className="form-text text-muted">
          {t("content-image-tip")}
        </small>
      </div>
      {content.image && (
        <div className="form-group">
          <img
            src={content.image}
            alt="Select"
            width="100%"
            style={{ borderRadius: "0.5rem" }}
          />
          <button
            className="btn btn-block btn-primary position-relative mt-3"
            style={{ height: "50px" }}
          >
            <FontAwesomeIcon icon={faImages} className="mr-2" />
            {t("select-img-button")}
            <input
              type="file"
              name="tweetContentImageFile"
              id="tweetContentImageFile"
              onChange={(e) => {
                selectedImagePreview(e.target);
              }}
            ></input>
          </button>
        </div>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageSettings);

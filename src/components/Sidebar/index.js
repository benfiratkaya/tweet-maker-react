import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

import { updateTweetAction } from "../../redux/actions/tweet";

import "./style.scss";
import imgProfile from "../../images/profile.png";
import imgSelect from "../../images/select.png";

const Sidebar = ({ tweet, updateTweet }) => {
  const { t } = useTranslation("sidebar");
  const selectedImagePreview = (input, type) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        let state = {};
        if (type === "profile")
          state = {
            profilePhoto: { ...tweet.profilePhoto, photo: e.target.result },
          };
        if (type === "content")
          state = { content: { ...tweet.content, image: e.target.result } };

        updateTweet(state);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  return (
    <div className="sidebar">
      <div className="card">
        <div className="card-header bg-secondary text-white">{t("title")}</div>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="tweetTheme">{t("tweet-theme")}</label>
              <select
                className="form-control"
                id="tweetTheme"
                name="tweetTheme"
                value={tweet.theme}
                onChange={(e) => updateTweet({ theme: e.target.value })}
              >
                <option value="light">{t("tweet-theme-light")}</option>
                <option value="dark">{t("tweet-theme-dark")}</option>
              </select>
            </div>
            <hr></hr>
            <div className="form-group">
              <label>{t("profile-photo")}</label>
              <div className="form-group row">
                <label htmlFor="frame" className="col-sm-4 col-form-label">
                  {t("frame")}
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    id="tweetProfilePhotoFrame"
                    name="tweetProfilePhotoFrame"
                    value={tweet.profilePhoto.frame}
                    onChange={(e) =>
                      updateTweet({
                        profilePhoto: {
                          ...tweet.profilePhoto,
                          frame: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="circle">{t("frame-circle")}</option>
                    <option value="rounded">{t("frame-rounded")}</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="photo" className="col-sm-4 col-form-label">
                  {t("photo")}
                </label>
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-auto pr-0">
                      <img
                        className={
                          tweet.profilePhoto.frame === "circle"
                            ? "rounded-circle"
                            : "rounded"
                        }
                        src={tweet.profilePhoto.photo || imgProfile}
                        alt="Profile"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-block btn-primary position-relative"
                        style={{ height: 50 }}
                      >
                        <FontAwesomeIcon icon={faImages} className="mr-2" />
                        {t("select-img-button")}
                        <input
                          type="file"
                          name="tweetProfilePhotoFile"
                          id="tweetProfilePhotoFile"
                          onChange={(e) => {
                            selectedImagePreview(e.target, "profile");
                          }}
                        ></input>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="form-group">
              <label htmlFor="accountStatus">{t("account-status")}</label>
              <select
                className="form-control"
                id="accountStatus"
                name="accountStatus"
                aria-describedby="accountStatusHelp"
                value={tweet.isVerifiedAccount ? "1" : "0"}
                onChange={(e) =>
                  updateTweet({
                    isVerifiedAccount: e.target.value === "1" ? true : false,
                  })
                }
              >
                <option value="0">{t("account-status-no")}</option>
                <option value="1">{t("account-status-yes")}</option>
              </select>
              <small id="accountStatusHelp" className="form-text text-muted">
                {t("account-status-tip")}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="accountName">{t("name")}</label>
              <input
                type="text"
                id="accountName"
                className="form-control"
                placeholder={t("name-placeholder")}
                value={tweet.name}
                onChange={(e) => updateTweet({ name: e.target.value })}
              />
              <small id="accountNameHelp" className="form-text text-muted">
                {t("name-tip")}
              </small>
            </div>
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
                  value={tweet.username}
                  onChange={(e) => updateTweet({ username: e.target.value })}
                />
              </div>
              <small id="accountUsernameHelp" className="form-text text-muted">
                {t("username-tip")}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="tweetContent">{t("content")}</label>
              <textarea
                type="text"
                id="tweetContent"
                className="form-control"
                placeholder={t("content-placeholder")}
                rows="3"
                onChange={(e) =>
                  updateTweet({
                    content: { ...tweet.content, text: e.target.value },
                  })
                }
              >
                {tweet.content.text}
              </textarea>
              <small id="tweetContentHelp" className="form-text text-muted">
                {t("content-tip")}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="tweetContentImage">{t("content-image")}</label>
              <select
                className="form-control"
                id="tweetContentImage"
                name="tweetContentImage"
                aria-describedby="tweetContentImageHelp"
                value={tweet.content.image ? "1" : "0"}
                onChange={(e) =>
                  updateTweet({
                    content: {
                      image: e.target.value === "1" ? imgSelect : null,
                    },
                  })
                }
              >
                <option value="0">{t("content-image-no")}</option>
                <option value="1">{t("content-image-yes")}</option>
              </select>
              <small
                id="tweetContentImageHelp"
                className="form-text text-muted"
              >
                {t("content-image-tip")}
              </small>
            </div>
            {tweet.content.image && (
              <div className="form-group">
                <img
                  src={tweet.content.image}
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
                      selectedImagePreview(e.target, "content");
                    }}
                  ></input>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tweet: state.tweet,
  };
};

const mapDispatchToProps = {
  updateTweet: updateTweetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

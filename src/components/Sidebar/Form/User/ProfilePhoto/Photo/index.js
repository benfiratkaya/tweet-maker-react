import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

import { updateTweetAction } from "../../../../../../redux/actions/tweet";

import imgProfile from "../../../../../../images/profile.png";

const PhotoSettings = ({ user, updateTweet }) => {
  const { t } = useTranslation("sidebar");

  const selectedImagePreview = (input) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        updateTweet({
          user: {
            ...user,
            profilePhoto: {
              ...user.profilePhoto,
              photo: e.target.result,
            },
          },
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  return (
    <div className="form-group row">
      <label htmlFor="photo" className="col-sm-4 col-form-label">
        {t("photo")}
      </label>
      <div className="col-sm-8">
        <div className="row">
          <div className="col-auto pr-0">
            <img
              className={
                user.profilePhoto.frame === "circle"
                  ? "rounded-circle"
                  : "rounded"
              }
              src={user.profilePhoto.photo || imgProfile}
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
                  selectedImagePreview(e.target);
                }}
              ></input>
            </button>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSettings);

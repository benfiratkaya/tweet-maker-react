import "./style.scss";
import imgProfile from "../../../../../../images/profile.png";

const UserProfilePhoto = ({ frame, photo }) => {
  return (
    <img
      className={`tweetProfilePicture ${
        frame === "circle" ? "rounded-circle" : "rounded"
      }`}
      src={photo || imgProfile}
      alt="Profile"
    />
  );
};

export default UserProfilePhoto;

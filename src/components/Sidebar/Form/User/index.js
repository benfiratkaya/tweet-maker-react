import ProfilePhotoSettings from "./ProfilePhoto";
import StatusSettings from "./Status";
import NameSettings from "./Name";
import UsernameSettings from "./Username";

const UserSettings = () => {
  return (
    <div className="form-group">
      <ProfilePhotoSettings />
      <hr></hr>
      <NameSettings />
      <UsernameSettings />
      <hr></hr>
      <StatusSettings />
    </div>
  );
};

export default UserSettings;

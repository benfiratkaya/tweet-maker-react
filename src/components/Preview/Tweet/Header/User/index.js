import { connect } from "react-redux";

import UserProfilePhoto from "./ProfilePhoto";
import UserName from "./Name";
import UserUsername from "./Username";
import UserStatus from "./Status";

const HeaderUser = ({ user }) => {
  return (
    <div className="media align-items-center">
      <UserProfilePhoto
        frame={user.profilePhoto.frame}
        photo={user.profilePhoto.photo}
      />
      <div className="media-body">
        <UserName name={user.name} />
        {user.isVerifiedAccount && <UserStatus />}
        <UserUsername username={user.username} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.tweet.user,
  };
};

export default connect(mapStateToProps)(HeaderUser);

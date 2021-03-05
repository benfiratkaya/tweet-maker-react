import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";

import { updateTweetAction } from "../../../../../redux/actions/tweet";

const StatusSettings = ({ user, updateTweet }) => {
  const { t } = useTranslation("sidebar");
  return (
    <div className="form-group">
      <label className="d-flex align-items-center" htmlFor="accountStatus">
        <span className="mr-2">{t("account-status")}</span>
        <Switch
          id="accountStatus"
          onChange={() =>
            updateTweet({
              user: { ...user, isVerifiedAccount: !user.isVerifiedAccount },
            })
          }
          checked={user.isVerifiedAccount}
        />
      </label>
      <small id="accountStatusHelp" className="form-text text-muted">
        {t("account-status-tip")}
      </small>
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

export default connect(mapStateToProps, mapDispatchToProps)(StatusSettings);

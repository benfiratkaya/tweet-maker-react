import { useTranslation } from "react-i18next";

import "./style.scss";

const UserUsername = ({ username }) => {
  const { t } = useTranslation("tweet");
  return (
    <span className="tweetUsername">@{username || t("user-username")}</span>
  );
};

export default UserUsername;

import { useTranslation } from "react-i18next";

import "./style.scss";

const UserName = ({ name }) => {
  const { t } = useTranslation("tweet");
  return <span className="tweetFullName">{name || t("user-name")}</span>;
};

export default UserName;

import { useTranslation } from "react-i18next";

import SettingsForm from "./Form";

import "./style.scss";

const Sidebar = () => {
  const { t } = useTranslation("sidebar");
  return (
    <div className="sidebar">
      <div className="card">
        <div className="card-header bg-secondary text-white">{t("title")}</div>
        <div className="card-body">
          <SettingsForm />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

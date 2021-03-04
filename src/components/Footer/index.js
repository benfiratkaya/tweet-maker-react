import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../LanguageSwitcher";

import "./style.scss";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
        <div className="col-auto">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { useTranslation } from "react-i18next";

import "flag-icon-css/css/flag-icon.min.css";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation("languages");
  const currentLanguage = i18n.language;
  const languages = i18n.options.supportedLngs.filter((language) => {
    return language !== "cimode";
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <a
        className="dropdown-toggle"
        href="#!"
        id="languageSwitchDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span
          className={`flag-icon flag-icon-${
            currentLanguage === "en" ? "us" : currentLanguage
          } mr-1`}
        ></span>
        {t(currentLanguage)}
      </a>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="languageSwitch"
      >
        {languages.map((language) => (
          <a
            href="#!"
            key={language}
            className={
              language === currentLanguage
                ? "dropdown-item active"
                : "dropdown-item"
            }
            onClick={() => changeLanguage(language)}
          >
            {t(language)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ThemeSwitcher from "../ThemeSwitcher";

import "./style.scss";

const Header = () => {
  const { t } = useTranslation("header");
  return (
    <header className="header">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="h5">
            <Link to="/">{t("title")}</Link>
          </h1>
        </div>
        <div className="col-auto d-flex align-items-center">
          <a
            className="text-muted mr-3"
            href="https://github.com/benfiratkaya/tweet-maker-react"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;

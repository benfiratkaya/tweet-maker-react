import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { setThemeAction } from "../../redux/actions/theme";

import "./style.scss";

const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <a
      href="#!"
      className="d-inline-block"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="themeSwitcher">
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </div>
    </a>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  setTheme: setThemeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);

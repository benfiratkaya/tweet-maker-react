import { useTranslation } from "react-i18next";

import Tweet from "./Tweet";
import DownloadButton from "./DownloadButton";

import "./style.scss";

const Preview = () => {
  const { t } = useTranslation("preview");
  return (
    <div className="preview">
      <div className="card">
        <div className="card-header bg-secondary text-white">{t("title")}</div>
        <div className="card-body">
          <div className="previewCanvas">
            <Tweet />
          </div>
          <DownloadButton text={t("download-button")} />
        </div>
      </div>
    </div>
  );
};

export default Preview;

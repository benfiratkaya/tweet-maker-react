import { useTranslation } from "react-i18next";

import FrameSettings from "./Frame";
import PhotoSettings from "./Photo";

const ProfilePhotoSettings = () => {
  const { t } = useTranslation("sidebar");
  return (
    <div className="form-group">
      <label>{t("profile-photo")}</label>
      <FrameSettings />
      <PhotoSettings />
    </div>
  );
};

export default ProfilePhotoSettings;

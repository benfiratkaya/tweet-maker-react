import { useTranslation } from "react-i18next";

const ContentText = ({ text }) => {
  const { t } = useTranslation("tweet");
  return text || t("content-text");
};

export default ContentText;

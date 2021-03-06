import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";

const ContentText = ({ text }) => {
  const { t } = useTranslation("tweet");
  if (text) {
    text = reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
      <span key={match + i} className="text-primary">
        {match}
      </span>
    ));
    text = reactStringReplace(text, /@(\w+)/g, (match, i) => (
      <span key={match + i} className="text-primary">
        @{match}
      </span>
    ));
    text = reactStringReplace(text, /#(\w+)/g, (match, i) => (
      <span key={match + i} className="text-primary">
        #{match}
      </span>
    ));
  } else {
    text = t("content-text");
  }
  return text;
};

export default ContentText;

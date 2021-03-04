import { useTranslation } from "react-i18next";

import DefaultLayout from "../../layouts/Default";

const NotFound = () => {
  const { t } = useTranslation("common");
  return (
    <DefaultLayout>
      <div className="alert alert-danger">{t("not-found")}</div>
    </DefaultLayout>
  );
};

export default NotFound;

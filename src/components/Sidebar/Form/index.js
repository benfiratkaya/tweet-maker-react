import ThemeSettings from "./Theme";
import UserSettings from "./User";
import ContentSettings from "./Content";

const SettingsForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <ThemeSettings />
      <hr></hr>
      <UserSettings />
      <hr></hr>
      <ContentSettings />
    </form>
  );
};

export default SettingsForm;

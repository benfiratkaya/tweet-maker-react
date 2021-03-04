const detectSystemTheme = () => {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkTheme = mq.matches;
  return isDarkTheme ? "dark" : "light";
};
export default detectSystemTheme;

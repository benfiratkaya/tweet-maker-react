import "./style.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;

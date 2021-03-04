import DefaultLayout from "../../layouts/Default";

import Sidebar from "../Sidebar";
import Preview from "../Preview";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-lg-4 order-2 order-lg-1">
          <Sidebar />
        </div>
        <div className="col-lg-8 order-1 order-lg-2 mb-4 mb-lg-0">
          <Preview />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;

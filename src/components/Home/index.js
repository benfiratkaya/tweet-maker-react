import DefaultLayout from "../../layouts/Default";

import Sidebar from "../Sidebar";
import Preview from "../Preview";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="col-8">
          <Preview />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;

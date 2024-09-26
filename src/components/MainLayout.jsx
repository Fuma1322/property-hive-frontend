import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Navbar from "./generalComponents/Navbar";
import Sidebar from "./generalComponents/Sidebar";

const pageTitles = {
  "/": "Dashboard",
  "/manage-properties": "Manage Properties",
  "/manage-properties/add": "Add Property",
};
const MainLayout = ({ children }) => {
  const pathname = useLocation().pathname;
  return (

    <div className="flex bg-[#F5F6F6]">
      <div>
        <Sidebar />
      </div>
      <div className="w-screen">
        <Navbar pagetitle={pageTitles[pathname]} />
        {children}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

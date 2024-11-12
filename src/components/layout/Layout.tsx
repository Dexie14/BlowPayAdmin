import { Outlet } from "react-router-dom";
import Header from "../menuBars/Header";
import Sidebar from "../menuBars/Sidebar";

const Layout = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[16%] bg-blowText text-white p-4">
        <Sidebar />
      </div>
      <div className="w-[82%]">
        <Header />
        <div className="h-[calc(100vh-83px)] overflow-y-auto scrollbar-hidden  pr-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

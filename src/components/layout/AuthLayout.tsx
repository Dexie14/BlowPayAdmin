import { Outlet } from "react-router-dom";
import AuthHeader from "../auth/AuthHeader";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AuthHeader />
      <div
        className="bg-white w-[90%] lg:w-[660px] mx-auto h-[70vh] overflow-y-scroll scrollbar-hidden my-auto border border-borderOutline rounded-2xl sm:py-8 sm:px-20 py-8 px-4"
        style={{
          boxShadow: "0px 1px 2px 0px #1018280D",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

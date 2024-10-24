import logo from "@/assets/icons/BlowAppLogo.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <section className="bg-blackShade">
      <nav className="w-[90%] mx-auto flex justify-between items-center py-3">
        <Link to={"/"} className="sm:w-[80px] w-[50px] sm:h-[80px] h-[50px]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </Link>
        <div className="justify-between items-center gap-14 sm:flex hidden ">
          <Link to={"/feature"} className="text-base font-semibold text-white">
            Log in
          </Link>
          <Button className="bg-blowSecondary border-2 border-buttonOutline text-white font-normal h-[48px] w-[204px] rounded-[10px]">
            Get Started - It’s Free
          </Button>
        </div>
      </nav>
    </section>
  );
};

export default AuthHeader;

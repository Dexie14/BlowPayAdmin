import { CalendarIcon, NotifyIcon } from "@/assets/svgComp/NavbarIcons";
import SearchInputComp from "../input/SearchInputComp";
import userAvatar from "@/assets/images/userAvatar.png";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useAuthStore } from "@/store/authStore";

const Header = () => {
  const { currentUser } = useAuthStore();

  console.log(currentUser, "currentUser");

  return (
    <div
      className="rounded-[15px] h-[83px] bg-white py-5 px-6"
      style={{ boxShadow: "0px 8px 28px 0px #4859660D" }}
    >
      <section className="flex justify-end items-center">
        <SearchInputComp
          placeholder="Quick Search..."
          inputClassName="placeholder-opacity-30"
        />
        <hr className=" mx-7 h-[40px] border-2 text-disabledText" />
        <div className="flex items-center gap-7">
          <CalendarIcon />
          <NotifyIcon />
          <aside className="flex items-center gap-1">
            <Avatar className="bg-disabledText h-[35px] w-[35px] rounded-[100px]">
              <AvatarFallback className="font-bold text-base bg-disabledText">
                <img src={userAvatar} alt="user" />
              </AvatarFallback>
            </Avatar>
            <div className="text-xs font-semibold">
              <h5 className="mb-1">Admin</h5>
              <h5>{currentUser?.emailAddress}</h5>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Header;

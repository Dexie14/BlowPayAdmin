import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/icons/BlowAppLogo.svg";
import SearchInputComp from "../input/SearchInputComp";

import userAvatar from "@/assets/images/userAvatar.png";
import { ReactNode } from "react";
import {
  AuditIcon,
  CardMgtIcon,
  CustomerIcon,
  DashboardIcon,
  KYCIcon,
  MessageIcon,
  SettingIcon,
  TransIcon,
} from "@/assets/svgComp/SidebarIcons";
import { NotificationIcon } from "@/assets/svgComp/NavbarIcons";
import { Avatar, AvatarFallback } from "../ui/avatar";

type SidebarItem = {
  name: string;
  sub: boolean;
  subItems?: Array<{
    name: string;
    link: string;
    icon?: ReactNode;
    count?: number;
  }>;
};

const sidebarItems: SidebarItem[] = [
  {
    name: "General",
    sub: true,
    subItems: [
      {
        name: "Dashboard",
        link: "/",
        icon: <DashboardIcon />,
      },
      {
        name: "Card Management",
        link: "/card-management",
        icon: <CardMgtIcon />,
      },
    ],
  },
  {
    name: "Services",
    sub: true,
    subItems: [
      {
        name: "Transactions History",
        link: "/history",
        icon: <TransIcon />,
      },
      {
        name: "Virtual Wallet",
        link: "/wallet",
        icon: <CardMgtIcon />,
      },
      {
        name: "Message",
        link: "/message",
        icon: <MessageIcon />,
        count: 2,
      },
    ],
  },
  {
    name: "Users",
    sub: true,
    subItems: [
      {
        name: "Customers",
        link: "/customers",
        icon: <CustomerIcon />,
      },
      {
        name: "KYC Management",
        link: "/kyc",
        icon: <KYCIcon />,
        count: 2,
      },
    ],
  },
  {
    name: "Support",
    sub: true,
    subItems: [
      {
        name: "Setting",
        link: "/setting",
        icon: <SettingIcon />,
      },
      {
        name: "Audit Trail",
        link: "/audit",
        icon: <AuditIcon />,
      },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="">
      <Link to={"/"} className="sm:w-[80px] w-[50px] sm:h-[80px] h-[50px]">
        <img src={logo} alt="logo" className="" />
      </Link>
      <div
        className="my-7 w-full"
        style={{
          boxShadow: "0px 0px 39.99px 0px #00000012",
        }}
      >
        <SearchInputComp
          placeholder="Search"
          className="!text-white bg-white bg-opacity-10 w-full"
          inputClassName="!placeholder-white !placeholder-opacity-10 text-white"
        />
      </div>

      <main className="overflow-y-scroll scrollbar-hidden h-[60vh]">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <h3 className="mb-2 text-disabledText text-xs">{item?.name}</h3>
            {item?.sub && (
              <ul>
                {item?.subItems?.map((subItem, subIndex) => {
                  const isActive = location.pathname === subItem.link;
                  return (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className={`flex items-center justify-between p-1 mb-7 ${
                          isActive
                            ? "bg-white bg-opacity-10 rounded-[5px]"
                            : "hover:bg-white hover:bg-opacity-10 hover:rounded-[5px]"
                        }`}
                      >
                        <div className="flex gap-3 text-white items-center">
                          {subItem.icon}
                          <p
                            className={`text-white text-sm ${
                              isActive ? "text-opacity-100" : "text-opacity-80"
                            } `}
                          >
                            {subItem.name}
                          </p>
                        </div>
                        {subItem?.count && (
                          <p className="text-white bg-white bg-opacity-10 rounded-full h-[19px] w-[19px] text-[10px] flex justify-center items-center">
                            2
                          </p>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
        <div className="flex items-center py-5 gap-7">
          <aside className="flex items-center gap-1">
            <Avatar className="bg-disabledText h-[35px] w-[35px] rounded-[100px]">
              <AvatarFallback className="font-bold text-base bg-disabledText">
                <img src={userAvatar} alt="user" />
              </AvatarFallback>
            </Avatar>
            <div className="text-xs font-semibold">
              <h5 className="">Admin</h5>
            </div>
          </aside>
          <NotificationIcon />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;

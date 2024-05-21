"use client";

import { IconType } from 'react-icons';
import {
  MdHome,
  MdDescription,
  MdLogout
} from "react-icons/md";
import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: IconType;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Home",
    path: "/",
    icon: MdHome,
  },
  {
    name: "Prior Auth Records",
    path: "/dashboard",
    icon: MdDescription,
  },
  {
    name: "Log Out",
    path: "/logout",
    icon: MdLogout,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <img className="h-10 w-fit" src="/cohelm-logo.png" alt="Logo" />
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
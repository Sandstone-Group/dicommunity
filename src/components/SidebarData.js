import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/dicommunity",
    icon: <IoIcons.IoIosHome />,
  },
  {
    title: "App",
    path: "/app",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: "Community",
    path: "/community",
    icon: <IoIcons.IoMdPeople />,
  },

  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },

  {
    title: "My Account",
    path: "/myaccount",
    icon: <IoIcons.IoIosPerson />,
  },
];

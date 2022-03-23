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
    icon: <IoIcons.IoIosApps />,
  },

  {
    title: "Community",
    path: "/community",
    icon: <IoIcons.IoMdPeople />,
  },

  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoIosBody />,
  },
  {
    title: "About diCommunity",
    path: "/about",
    icon: <IoIcons.IoIosSwitch />,
  },
];

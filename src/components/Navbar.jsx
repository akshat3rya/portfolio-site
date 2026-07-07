import { NavLink } from "react-router-dom";
import {
  House,
  FolderOpen,
  Newspaper,
  User,
} from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <House size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FolderOpen size={20} />,
    },
    {
      name: "Articles",
      path: "/articles",
      icon: <Newspaper size={20} />,
    },
    {
      name: "About",
      path: "/about",
      icon: <User size={20} />,
    },
  ];
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="nav-item"
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      {/* Mobile */}
    </>
  );
}
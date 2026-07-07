import { NavLink } from "react-router-dom";
import { Home, FolderOpen, Newspaper, User } from "lucide-react";
export default function MobileNavbar() {
    return(
        <nav className="mobile-navbar">
            <NavLink to="/" end>
                <Home size={20}/>
            </NavLink>
            <NavLink to="/projects">
                <FolderOpen size={20}/>
            </NavLink>
            <NavLink to="/articles">
                <Newspaper size={20}/>
            </NavLink>
            <NavLink to="/about">
                <User size={20}/>
            </NavLink>
        </nav>
    );
}
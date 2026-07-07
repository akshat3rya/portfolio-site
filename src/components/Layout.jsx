import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileNavbar from "./MobileNavbar";
export default function Layout() {
  return (
    <div className="app">

    <Navbar />

    <main className="content">

        <ThemeSwitcher />

        <Outlet />

    </main>

    <MobileNavbar />

</div>
  );
}
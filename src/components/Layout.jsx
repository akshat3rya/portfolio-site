import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";
export default function Layout() {
  return (
    <div className="app">

    <TopBar />

    <Navbar />

    <main className="content">

        <Outlet />

        <div className="container">
          {/* <Footer /> */}
        </div>

    </main>

    <MobileNavbar />

</div>
  );
}

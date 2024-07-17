import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="min-h-dvh bg-slate-100">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;

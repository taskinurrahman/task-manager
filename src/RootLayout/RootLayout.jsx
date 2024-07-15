import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Roboto w-full">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Root
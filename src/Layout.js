import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;

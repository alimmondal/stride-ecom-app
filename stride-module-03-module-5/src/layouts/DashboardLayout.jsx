import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

export default function DashboardLayout() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
            {/* Sidebar content here */}
            <div>
              <li>
                <Link to={"profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"all-products"}>all-products</Link>
              </li>
              <li>
                <Link to={"add-products"}>add-products</Link>
              </li>
            </div>
            <div className="flex gap-4">
              <Link to={"/"} className="btn btn-neutral">
                Home
              </Link>
              <button className="btn btn-error" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

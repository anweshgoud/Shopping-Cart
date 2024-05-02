import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  handleSideBar: (str: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleSideBar }) => {
  const [sidebar, setSidebar] = useState<string>("Dashboard");

  const handleButton = (str: string) => {
    setSidebar(str);
    handleSideBar(str);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ width: "280px", height: "600px", lineHeight: "60px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/Dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link-active-link-body-emphasis" : ""
            }
            onClick={() => handleButton("Dashboard")}
          >
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Orders"
            className={(sidebar==='Orders' ? "nav-link-active-link-body-emphasis" : "")
            }
            onClick={() => handleButton("Orders")}
          >
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Products"
            className={({ isActive }) =>
              isActive ? "nav-link-active-link-body-emphasis" : ""
            }
            onClick={() => handleButton("Products")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Users"
            className={({ isActive }) =>
              isActive ? "nav-link-active-link-body-emphasis" : ""
            }
            onClick={() => handleButton("Users")}
          >
            Users
          </NavLink>
        </li>
      </ul>
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></a>
      </div>
    </div>
  );
};

export default Sidebar;

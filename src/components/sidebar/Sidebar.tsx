import React from "react";
import classes from "./Sidebar.module.scss";
import { customerSideBar } from "@/shared/sidebar";
import { businessSideBar } from "@/shared/sidebar";
import { settingsSideBar } from "@/shared/sidebar";
import Switch from "@/assets/switch.svg";
import Dashboard from "@/assets/dashboard.svg";

type Props = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.blocks}>
        <ul>
          <li>
            <span>
              <img src={Switch} alt="switch icon" />
            </span>{" "}
            Switch Organization
          </li>
          <li>
            <span>
              <img src={Dashboard} alt="dashboard icon" />
            </span>{" "}
            Dashboard
          </li>
        </ul>
      </div>

      <div className={classes.blocks}>
        <h1>CUSTOMERS</h1>
        {customerSideBar.map((item, index) => (
          <ul key={index}>
            <li>
              <span>
                <img src={item.icon} alt="customer icons" />
              </span>{" "}
              {item.title}
            </li>
          </ul>
        ))}
      </div>

      <div className={classes.blocks}>
        <h1>BUSINESSES</h1>
        {businessSideBar.map((item, index) => (
          <ul key={index}>
            <li>
              <span>
                <img src={item.icon} alt="business icons" />
              </span>{" "}
              {item.title}
            </li>
          </ul>
        ))}
      </div>

      <div className={classes.blocks}>
        <h1>SETTINGS</h1>
        {settingsSideBar.map((item, index) => (
          <ul key={index}>
            <li>
              <span>
                <img src={item.icon} alt="settings icons" />
              </span>{" "}
              {item.title}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

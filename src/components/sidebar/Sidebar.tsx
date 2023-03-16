import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";
import { customerSideBar } from "@/shared/sidebar";
import { businessSideBar } from "@/shared/sidebar";
import { settingsSideBar } from "@/shared/sidebar";
import Switch from "@/assets/switch.svg";
import Dashboard from "@/assets/dashboard.svg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className={`${classes.container} ${classes.scroll}`}>
      {/* Main section */}
      <div className={classes.blocks}>
        <ul>
          <li>
            <NavLink to="/switch" end className={classes.navitem}>
              <span>
                <img src={Switch} alt="switch icon" />
              </span>{" "}
              <span>Switch Organization</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" end className={classes.navitem}>
              <span>
                <img src={Dashboard} alt="dashboard icon" />
              </span>{" "}
              <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Customer section */}
      <div className={classes.blocks}>
        <h1>CUSTOMERS</h1>
        {customerSideBar.map((item, index) => (
          <ul key={index}>
            <li>
              <NavLink to={item.title} className={classes.navitem}>
                <span>
                  <img src={item.icon} alt="icon" />
                </span>{" "}
                <span>{item.title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>

      {/* Business section */}
      <div className={classes.blocks}>
        <h1>BUSINESSES</h1>
        {businessSideBar.map((item, index) => (
          <ul key={index}>
            <li>
              <NavLink to={item.title} className={classes.navitem}>
                <span>
                  <img src={item.icon} alt="icon" />
                </span>{" "}
                <span>{item.title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>

      {/* Settings section */}
      <div className={classes.blocks}>
        <h1>SETTINGS</h1>
        {settingsSideBar.map((item, index) => (
          <ul key={index}>
            <li>
              <NavLink to={item.title} className={classes.navitem}>
                <span>
                  <img src={item.icon} alt="icon" />
                </span>{" "}
                <span>{item.title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

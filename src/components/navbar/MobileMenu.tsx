import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MobileMenu.module.scss";
import { ReactComponent as Switch } from "@/assets/switch.svg";
import { ReactComponent as Dashboard } from "@/assets/dashboard.svg";
import { customerSideBar } from "@/shared/sidebar";
import { businessSideBar } from "@/shared/sidebar";
import { settingsSideBar } from "@/shared/sidebar";

type Props = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ setToggleMenu }: Props) => {
  const setHandler = () => {
    setToggleMenu(false);
  };

  return (
    <div className={`${classes.container} ${classes.scroll}`}>
      {/* Main section */}
      <div className={classes.blocks}>
        <ul>
          <li>
            <NavLink
              to="/switch"
              onClick={setHandler}
              end
              className={classes.navitem}
            >
              <span>
                <Switch />
              </span>{" "}
              <span>Switch Organization</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              onClick={setHandler}
              end
              className={classes.navitem}
            >
              <span>
                <Dashboard />
              </span>{" "}
              <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Customer section */}
      <div className={classes.blocks}>
        <h1>CUSTOMERS</h1>
        {customerSideBar.map(({ Icon, title }, index) => (
          <ul key={index}>
            <li>
              <NavLink
                to={title}
                onClick={setHandler}
                className={classes.navitem}
              >
                <span>
                  <Icon />
                </span>{" "}
                <span>{title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>

      {/* Business section */}
      <div className={classes.blocks}>
        <h1>BUSINESSES</h1>
        {businessSideBar.map(({ Icon, title }, index) => (
          <ul key={index}>
            <li>
              <NavLink
                to={title}
                onClick={setHandler}
                className={classes.navitem}
              >
                <span>
                  <Icon />
                </span>{" "}
                <span>{title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>

      {/* Settings section */}
      <div className={classes.blocks}>
        <h1>SETTINGS</h1>
        {settingsSideBar.map(({ Icon, title }, index) => (
          <ul key={index}>
            <li>
              <NavLink
                to={title}
                onClick={setHandler}
                className={classes.navitem}
              >
                <span>
                  <Icon />
                </span>{" "}
                <span>{title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;

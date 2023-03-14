import React from "react";
import classes from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Users from "@/components/users/Users";
import UserDetail from "@/components/users/UserDetail";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={classes.container}>
        <div className={classes.navbarcontainer}>
          <Navbar />
        </div>
        
        <div className={classes.main}>
          <div className={classes.left}>
            <Sidebar />
          </div>
          <div className={classes.right}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

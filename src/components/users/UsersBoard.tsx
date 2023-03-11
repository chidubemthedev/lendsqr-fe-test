import React from "react";
import classes from "./UsersBoard.module.scss";
import { userBoard } from "@/shared/types";

type Props = {};

const UsersBoard = (props: Props) => {
  return (
    <div className={classes.container}>
      {userBoard.map((item, index) => {
        return (
          <div key={index} className={classes.card}>
            <img src={item.icon} alt="user icon" />
            <p className={classes.title}>{item.title}</p>
            <p className={classes.value}>{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersBoard;

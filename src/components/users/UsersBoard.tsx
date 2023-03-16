import classes from "./UsersBoard.module.scss";
import { userBoard } from "@/shared/userboard";

type Props = {};

const UsersBoard = (props: Props) => {
  return (
    <div className={classes.container}>
      {userBoard.map(({ Icon, title, value }, index) => {
        return (
          <div key={index} className={classes.card}>
            <Icon />
            <p className={classes.title}>{title}</p>
            <p className={classes.value}>{value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersBoard;

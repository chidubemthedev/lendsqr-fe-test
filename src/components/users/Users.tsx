import UsersBoard from "./UsersBoard";
import classes from "./Users.module.scss";
import UsersTable from "./UsersTable";

type Props = {};

const Users = (props: Props) => {
  return (
    <div className={classes.container}>
      <h1>Users</h1>
      <UsersBoard />

      <div>
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;

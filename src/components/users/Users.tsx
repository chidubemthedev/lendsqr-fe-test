import React from 'react'
import UsersBoard from './UsersBoard'
import classes from './Users.module.scss'
import UsersTable from './UsersTable'
import { getUsers } from "@/util/api";
import { useLoaderData } from "react-router-dom";

type Props = {}

const Users = (props: Props) => {
  // const loaderData = useLoaderData();

  // console.log(loaderData);

  return (
    <div className={classes.container}>
        <h1>Users</h1>
        <UsersBoard />

        <div>
            <UsersTable />
        </div>
    </div>
  )
}

export default Users

// export function loader() {
//   return getUsers();
// }
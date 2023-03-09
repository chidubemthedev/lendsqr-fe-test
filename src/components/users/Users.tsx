import React from 'react'
import UserBoard from './UserBoard'
import classes from './Users.module.scss'

type Props = {}

const Users = (props: Props) => {
  return (
    <div className={classes.container}>
        <h1>Users</h1>
        <UserBoard />

        <div>
            table goes here
        </div>
    </div>
  )
}

export default Users
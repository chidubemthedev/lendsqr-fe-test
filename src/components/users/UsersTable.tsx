import React, { useEffect, useState } from "react";
import classes from "./UsersTable.module.scss";
import FilterButton from "@/assets/filterbutton.svg";
import Icmore from "@/assets/icmore.svg";
import DeleteIcon from "@/assets/dropdownicons/delfriend.svg";
import UserIcon from "@/assets/dropdownicons/user.svg";
import ViewIcon from "@/assets/dropdownicons/view.svg";
import { userTable } from "@/shared/dataTypes";

import { getUsers } from "@/util/api";

type Props = {
  // users: userTable[];
};

const UserTable = (props: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const users = getUsers();

    const data = users.then((res) => {
      console.log(res);
      setData(res);
    });
    
  }, []);

  return (
    <div>
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th>
                Organization{" "}
                <span>
                  <img src={FilterButton} alt="filter button" />
                </span>
              </th>
              <th>
                Username{" "}
                <span>
                  <img src={FilterButton} alt="filter button" />
                </span>
              </th>
              <th>
                Email{" "}
                <span>
                  <img src={FilterButton} alt="filter button" />
                </span>
              </th>
              <th>
                Phone number{" "}
                <span>
                  <img src={FilterButton} alt="filter button" />
                </span>
              </th>
              <th>
                Date joined{" "}
                <span>
                  <img src={FilterButton} alt="filter button" />
                </span>
              </th>
              <th>
                Status{" "}
                <span>
                  <img src={FilterButton} alt="filter button" />
                </span>
              </th>
              {/* <th></th> */}
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{user.organisation}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dateJoined}</td>
                  <td>Inactive</td>
                  <td>
                    <img
                      onClick={() => {
                        setToggleDropdown(!toggleDropdown);
                      }}
                      src={Icmore}
                      alt="more options button"
                    />
                    {toggleDropdown && (
                      <div className={classes.dropdown}>
                        <ul>
                          <li>
                            <img src={ViewIcon} alt="view icon" />
                            <span>View Details</span>
                          </li>
                          <li>
                            <img src={DeleteIcon} alt="view icon" />
                            <span>Blacklist User</span>
                          </li>
                          <li>
                            <img src={UserIcon} alt="view icon" />
                            <span>Activate User</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

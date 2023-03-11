import React, { useState } from "react";
import classes from "./UsersTable.module.scss";
import FilterButton from "@/assets/filterbutton.svg";
import Icmore from "@/assets/icmore.svg";
import DeleteIcon from "@/assets/dropdownicons/delfriend.svg";
import UserIcon from "@/assets/dropdownicons/user.svg";
import ViewIcon from "@/assets/dropdownicons/view.svg";

type Props = {};

const UserTable = (props: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);

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
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
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
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td>
                <img src={Icmore} alt="more options button" />
              </td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td>
                <img src={Icmore} alt="more options button" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

import React, { useEffect, useRef, useState } from "react";
import classes from "./UsersTable.module.scss";
import FilterButton from "@/assets/filterbutton.svg";
import Icmore from "@/assets/icmore.svg";
import DeleteIcon from "@/assets/dropdownicons/delfriend.svg";
import UserIcon from "@/assets/dropdownicons/user.svg";
import ViewIcon from "@/assets/dropdownicons/view.svg";
import { userTable } from "@/shared/dataTypes";

import { getUser, getUsers } from "@/util/api";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

type Props = {
};

const UserTable = (props: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const tableRef = useRef<HTMLTableElement>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const users = getUsers();

    const data = users.then((res) => {
      setData(res);
    });
  }, []);

  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);

    //logic to scrollto top of table
    let position;
    if (tableRef.current != undefined) {
      position = tableRef.current?.getBoundingClientRect().top + window.scrollY - 55;
    }
    window.scrollTo({ top: position, behavior: "smooth" });
  };

  return (
    <div>
      <div className={classes.container}>
        <table ref={tableRef}>
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
              currentItems.map((user: any, index: number) => (
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

      {/* pagination */}
      <div className={classes.paginationcontainer}>
        <div className={classes.paginationinfo}>
          <p>Showing</p>
          <p className={classes.showing}>{itemOffset + itemsPerPage}</p>
          <p>out of {data.length}</p>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName={classes.pagination}
          pageClassName={classes.page}
          pageLinkClassName={classes.pageLink}
          activeClassName={classes.active}
          previousClassName={classes.previous}
          nextClassName={classes.next}
          previousLinkClassName={classes.previousLink}
          nextLinkClassName={classes.nextLink}
          disabledClassName={classes.disabled}
        />
      </div>
    </div>
  );
};

export default UserTable;

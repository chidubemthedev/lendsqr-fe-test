import { useEffect, useRef, useState } from "react";
import classes from "./UsersTable.module.scss";
import { ReactComponent as FilterButton } from "@/assets/filterbutton.svg";
import { ReactComponent as Icmore } from "@/assets/icmore.svg";
import { ReactComponent as DeleteIcon } from "@/assets/dropdownicons/delfriend.svg";
import { ReactComponent as UserIcon } from "@/assets/dropdownicons/user.svg";
import { ReactComponent as ViewIcon } from "@/assets/dropdownicons/view.svg";
import { userTable } from "@/shared/dataTypes";
import { getUsers } from "@/util/api";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import FilterPopup from "./FilterPopup";

type Props = {};

const UserTable = (props: Props) => {
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<number | null>(null);

  const [data, setData] = useState<userTable[]>([]);
  const tableRef = useRef<HTMLTableElement>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setData(JSON.parse(storedUsers));
    } else {
      const users = async (): Promise<void> => {
        const response = await getUsers();
        setData(response);
        localStorage.setItem("users", JSON.stringify(response));
      };
      users();
    }
  }, []);

  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  console.log(data.length);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);

    //logic to scrollto top of table
    let position;
    if (tableRef.current != undefined) {
      position =
        tableRef.current?.getBoundingClientRect().top + window.scrollY - 70;
    }
    window.scrollTo({ top: position, behavior: "smooth" });
  };

  //dropdown menu logic for more options
  const handleOptionsClick = (userId: number) => {
    setShowPopup((prevState) => (prevState === userId ? null : userId));
  };

  return (
    <div>
      <div className={classes.container}>
        <table ref={tableRef}>
          <thead>
            <tr>
              <th>
                Organization{" "}
                <span onClick={() => setToggleFilter(!toggleFilter)}>
                  <FilterButton />
                </span>
              </th>
              <th>
                Username{" "}
                <span>
                  <FilterButton />
                </span>
              </th>
              <th>
                Email{" "}
                <span>
                  <FilterButton />
                </span>
              </th>
              <th>
                Phone number{" "}
                <span>
                  <FilterButton />
                </span>
              </th>
              <th>
                Date joined{" "}
                <span>
                  <FilterButton />
                </span>
              </th>
              <th>
                Status{" "}
                <span>
                  <FilterButton />
                </span>
              </th>
            </tr>
          </thead>
          {toggleFilter && (
            <div>
              <FilterPopup />
            </div>
          )}

          <tbody>
            {data &&
              currentItems?.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{user.organisation}</td>
                  <td>
                    <Link to={`/dashboard/users/${itemOffset + index + 1}`}>
                      {user.username}
                    </Link>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dateJoined}</td>
                  <td>Inactive</td>
                  <td>
                    <Icmore
                      onClick={() => handleOptionsClick(itemOffset + index + 1)}
                    />
                  </td>
                  {showPopup === itemOffset + index + 1 && (
                    <div className={classes.dropdown}>
                      <ul>
                        <Link
                          className={classes.link}
                          to={`/dashboard/users/${itemOffset + index + 1}`}
                        >
                          <ViewIcon />
                          <span>View Details</span>
                        </Link>
                        <Link className={classes.link} to="">
                          <DeleteIcon />
                          <span>Blacklist User</span>
                        </Link>
                        <Link className={classes.link} to="">
                          <UserIcon />
                          <span>Activate User</span>
                        </Link>
                      </ul>
                    </div>
                  )}
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
          <p>out of {data?.length}</p>
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

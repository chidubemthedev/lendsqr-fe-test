import React, { useState } from "react";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import Search from "@/assets/search_icon.png";
import Bell from "@/assets/nav_notif_icon.png";
import ProfilePic from "@/assets/profile_image.png";
import Dropdown from "@/assets/nav_dropdown.png";
import { ReactComponent as Open } from "@/assets/open_icon.svg";
import { ReactComponent as Close } from "@/assets/close_icon.svg";
import classes from "./Navbar.module.scss";
import MobileMenu from "./MobileMenu";

type Props = {};

const Navbar = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className={classes.nav}>
      {/* first half of div */}
      <div className={classes.nav_left}>
        <div>
          <Logo />
        </div>

        <div className={classes.search}>
          <input type="text" placeholder="Search for anything" />
          <button>
            <img src={Search} alt="search icon" />
          </button>
        </div>
      </div>

      {/* second half of div */}
      <div className={classes.nav_right}>
        <ul>
          <li className={classes.docs}>Docs</li>
          <li>
            <img src={Bell} alt="bell icon" />
          </li>
          <li>
            <div>
              <img
                className={classes.profileimage}
                src={ProfilePic}
                alt="profile pic"
              />
            </div>
          </li>
          <li>
            <div>
              <span>Adedeji</span>
              <span>
                <img src={Dropdown} alt="dropdown icon" />
              </span>
            </div>
          </li>

          <div>
            <Open
              className={classes.img}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </div>
        </ul>
      </div>

      {/* mobile nav */}
      {toggleMenu && (
        <div className={classes.mobile}>
          <div className={classes.mobile_head}>
            <Close
              className={classes.close}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <Logo />
            <div className={classes.search}>
              <input type="text" placeholder="Search for anything" />
              <button>
                <img src={Search} alt="search icon" />
              </button>
            </div>
          </div>

          <div>
            <MobileMenu setToggleMenu={setToggleMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

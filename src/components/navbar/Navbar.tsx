import React from "react";
import Logo from "@/assets/logo.svg";
import Search from "@/assets/search_icon.png";
import Bell from "@/assets/nav_notif_icon.png";
import ProfilePic from "@/assets/profile_image.png";
import Dropdown from "@/assets/nav_dropdown.png";
import classes from "./Navbar.module.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={classes.nav}>
      {/* first half of div */}
      <div className={classes.nav_left}>
        <div>
          <img src={Logo} alt="brand logo" />
        </div>

        <div className={classes.search}>
          <input type="text" placeholder="Search for anything" />
          <button><img src={Search} alt="search icon" /></button>
        </div>
      </div>

      {/* second half of div */}
      <div className={classes.nav_right}>
        <ul>
          <li className={classes.docs}>Docs</li>
          <li><img src={Bell} alt="bell icon" /></li>
          <li><div><img src={ProfilePic} alt="profile pic" /></div></li>
          <li><div><span>Adedeji</span><span><img src={Dropdown} alt="dropdown icon" /></span></div></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

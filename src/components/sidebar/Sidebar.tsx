import React from "react";
import classes from "./Sidebar.module.scss";

type Props = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: Props) => {
  return (
    <div>
      <div>
        This contains the search bar and right side nav items
      </div>
      <div>
        <ul>
          <li>aaaa</li>
          <li>bbbbbbbbbb</li>
          <li>cccccccc</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

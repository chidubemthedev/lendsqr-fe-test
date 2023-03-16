import React from "react";
import classes from "./FilterPopup.module.scss";

type Props = {};

const FilterPopup = (props: Props) => {
  return (
    <div className={classes.container}>
      <form className={classes.filterBody}>
        <div>
          <label htmlFor="organisation">Organisation</label>
          <select name="organisation" id="organisation">
            <option value="active">Select</option>
          </select>
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="User" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="number" name="phone" id="phone" placeholder="Phone Number" />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="active">Select</option>
          </select>
        </div>

        <div className={classes.buttondiv}>
          <button className={classes.resetbutton} type="reset">Reset</button>
          <button className={classes.filterbutton} type="submit">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterPopup;

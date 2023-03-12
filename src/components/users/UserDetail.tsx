import React from "react";
import classes from "./UserDetail.module.scss";
import Backarrow from "@/assets/userdetailicon/backarrow.svg";
import Avatar from "@/assets/userdetailicon/avatar.svg";
import StarFilled from "@/assets/userdetailicon/starfilled.svg";
import StarOutline from "@/assets/userdetailicon/staroutline.svg";

type Props = {};

const UserDetail = (props: Props) => {
  return (
    <div className={classes.container}>
      {/* Header section */}
      <div>
        <a href="#">
          <span className={classes.span}>
            <img src={Backarrow} alt="go back" />
          </span>{" "}
          Back to Users
        </a>
        <div className={classes.header}>
          <h1>User Details</h1>
          <div>
            <button className={classes.blacklist}>Blacklist User</button>
            <button className={classes.activate}>Activate User</button>
          </div>
        </div>
      </div>

      {/* User info section */}
      <div className={classes.info}>
        <div className={classes.profileinfo}>
          <div>
            <img src={Avatar} alt="profile image" />
          </div>
          <div>
            <h1>Grace Effiom</h1>
            <p>LSQFf587g90</p>
          </div>
        </div>
        <div className={classes.profiletier}>
          <h1>User's Tier</h1>
          <div>
            <img src={StarFilled} alt="star rating" />
            <img src={StarOutline} alt="star rating" />
            <img src={StarOutline} alt="star rating" />
          </div>
        </div>
        <div className={classes.profilebalance}>
          <h1>₦200,000.00</h1>
          <p>9912345678/Providus Bank</p>
        </div>
      </div>

      {/* Details section */}
      <div className={classes.details}>
        {/* personal info */}
        <div>
          <h1>Personal Information</h1>
          <div className={classes.detailssection}>
            <div>
              <h2>full Name</h2>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h2>Phone Number</h2>
              <p>07060780922</p>
            </div>
            <div>
              <h2>Email Address</h2>
              <p>grace@gmail.com</p>
            </div>
            <div>
              <h2>Bvn</h2>
              <p>07060780922</p>
            </div>
            <div>
              <h2>Gender</h2>
              <p>Female</p>
            </div>
            <div>
              <h2>Marital status</h2>
              <p>Single</p>
            </div>
            <div>
              <h2>Children</h2>
              <p>None</p>
            </div>
            <div>
              <h2>Type of residence</h2>
              <p>Parent's Apartment</p>
            </div>
          </div>
        </div>

        {/* education and employment */}
        <div>
          <h1>Education and Employment</h1>
          <div>
            <div>
              <h2>level of education</h2>
              <p>B.Sc</p>
            </div>
            <div>
              <h2>Employment status</h2>
              <p>Employed</p>
            </div>
            <div>
              <h2>sector of employment</h2>
              <p>FinTech</p>
            </div>
            <div>
              <h2>Duration of employment</h2>
              <p>2 years</p>
            </div>
            <div>
              <h2>office email</h2>
              <p>grace@lendsqr.com</p>
            </div>
            <div>
              <h2>Monthly income</h2>
              <p>₦200,000.00- ₦400,000.00</p>
            </div>
            <div>
              <h2>loan repayment</h2>
              <p>40,000</p>
            </div>
          </div>
        </div>

        {/* socials */}
        <div>
          <h1>Socials</h1>
          <div>
            <div>
              <h2>Twitter</h2>
              <p>@grace_effiom</p>
            </div>
            <div>
              <h2>Facebook</h2>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h2>Instagram</h2>
              <p>@grace_effiom</p>
            </div>
          </div>
        </div>

        {/* gurantor */}
        <div>
          <h1>Gurantor</h1>
          <div>
            <div>
              <h2>full Name</h2>
              <p>Debby Ogana</p>
            </div>
            <div>
              <h2>Phone Number</h2>
              <p>07060780922</p>
            </div>
            <div>
              <h2>Email Address</h2>
              <p>debby@gmail.com</p>
            </div>
            <div>
              <h2>Relationship</h2>
              <p>Sister</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

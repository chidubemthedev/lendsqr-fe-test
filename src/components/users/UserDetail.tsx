import { useEffect, useState } from "react";
import classes from "./UserDetail.module.scss";
import { ReactComponent as Backarrow } from "@/assets/userdetailicon/backarrow.svg";
import { ReactComponent as Avatar } from "@/assets/userdetailicon/avatar.svg";
import { ReactComponent as StarFilled } from "@/assets/userdetailicon/starfilled.svg";
import { ReactComponent as StarOutline } from "@/assets/userdetailicon/staroutline.svg";
import { getUser } from "@/util/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "@/shared/dataTypes";

interface UserDetailProps {
  fromUserPage?: boolean;
}

const UserDetail = ({ fromUserPage }: UserDetailProps) => {
  const [userDetail, setUserDetail] = useState<UserDetails>();
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const storedUserDetail = localStorage.getItem(`userDetail-${id}`);
    if (storedUserDetail) {
      setUserDetail(JSON.parse(storedUserDetail));
    } else {
      const userInfo = async () => {
        const response = await getUser(Number(id));
        setUserDetail(response);
        localStorage.setItem(`userDetail-${id}`, JSON.stringify(response));
      };
      userInfo();
      console.log(userDetail);
    }
  }, [id]);

  const handleClickBack = (): void => {
    navigate("../", { state: { fromUserPage: true } });
  };

  const loading: string = "xxx-xxx-xxx";

  return (
    <div className={classes.container}>
      {/* Header section */}
      <div>
        <button className={classes.backbutton} onClick={handleClickBack}>
          <span className={classes.span}>
            <Backarrow />
          </span>{" "}
          <span>Back to Users</span>
        </button>
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
            {userDetail ? (
              <img src={userDetail.profile.avatar}></img>
            ) : (
              <Avatar />
            )}
          </div>
          <div>
            <h1>{`${userDetail ? userDetail.profile.firstName : loading} ${
              userDetail ? userDetail.profile.lastName : loading
            }`}</h1>
            <p>LSQFf587g90</p>
          </div>
        </div>
        <div className={classes.profiletier}>
          <h1>User's Tier</h1>
          <div>
            <StarFilled />
            <StarOutline />
            <StarOutline />
          </div>
        </div>
        <div className={classes.profilebalance}>
          <h1>₦{userDetail ? userDetail.accountBalance : loading}</h1>
          <p>{userDetail ? userDetail.accountNumber : loading}/Providus Bank</p>
        </div>
      </div>

      {/* in-nav */}
      <div className={classes.innav}>
        <ul>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>

      {/* Details section */}
      <div className={classes.details}>
        {/* personal info */}
        <div>
          <h1>Personal Information</h1>
          <div className={classes.detailssection}>
            <div>
              <h2>full Name</h2>
              <p>{`${userDetail ? userDetail.profile.firstName : loading} ${
                userDetail ? userDetail.profile.lastName : loading
              }`}</p>
            </div>
            <div>
              <h2>Phone Number</h2>
              <p>{userDetail ? userDetail.phoneNumber : loading}</p>
            </div>
            <div>
              <h2>Email Address</h2>
              <p>{userDetail ? userDetail.email : loading}</p>
            </div>
            <div>
              <h2>Bvn</h2>
              <p>{userDetail ? userDetail.profile.bvn : loading}</p>
            </div>
            <div>
              <h2>Gender</h2>
              <p>{userDetail ? userDetail.profile.gender : loading}</p>
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
          <div className={classes.detailssection}>
            <div>
              <h2>level of education</h2>
              <p>{userDetail ? userDetail.education.level : loading}</p>
            </div>
            <div>
              <h2>Employment status</h2>
              <p>
                {userDetail ? userDetail.education.employmentStatus : loading}
              </p>
            </div>
            <div>
              <h2>sector of employment</h2>
              <p>{userDetail ? userDetail.education.sector : loading}</p>
            </div>
            <div>
              <h2>Duration of employment</h2>
              <p>{userDetail ? userDetail.education.duration : loading}</p>
            </div>
            <div>
              <h2>office email</h2>
              <p>{userDetail ? userDetail.education.officeEmail : loading}</p>
            </div>
            <div>
              <h2>Monthly income</h2>
              <p>{`₦${
                userDetail ? userDetail.education.monthlyIncome[0] : loading
              } - ₦${
                userDetail ? userDetail.education.monthlyIncome[1] : loading
              }`}</p>
            </div>
            <div>
              <h2>loan repayment</h2>
              <p>
                ₦{userDetail ? userDetail.education.loanRepayment : loading}
              </p>
            </div>
          </div>
        </div>

        {/* socials */}
        <div>
          <h1>Socials</h1>
          <div className={classes.detailssection}>
            <div>
              <h2>Twitter</h2>
              <p>{userDetail ? userDetail.socials.twitter : loading}</p>
            </div>
            <div>
              <h2>Facebook</h2>
              <p>{userDetail ? userDetail.socials.facebook : loading}</p>
            </div>
            <div>
              <h2>Instagram</h2>
              <p>{userDetail ? userDetail.socials.instagram : loading}</p>
            </div>
          </div>
        </div>

        {/* gurantor */}
        <div>
          <h1>Gurantor</h1>
          <div className={classes.detailssection}>
            <div>
              <h2>full Name</h2>
              <p>{`${userDetail ? userDetail.guarantor.firstName : loading} ${
                userDetail ? userDetail.guarantor.lastName : loading
              }`}</p>
            </div>
            <div>
              <h2>Phone Number</h2>
              <p>{userDetail ? userDetail.guarantor.phoneNumber : loading}</p>
            </div>
            <div>
              <h2>Address</h2>
              <p>{userDetail ? userDetail.guarantor.address : loading}</p>
            </div>
            <div>
              <h2>Relationship</h2>
              <p>{userDetail ? userDetail.guarantor.gender : loading}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

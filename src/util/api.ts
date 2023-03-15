import { userTable } from "../shared/dataTypes";
import { UserDetails } from "../shared/dataTypes";
// export interface User {
//   organisation: string;
//   username: string;
//   email: string;
//   phone: string;
//   dateJoined: string;
//   status: string;
// }

// export interface UserDetail {
//   accountBalance: string;
//   accountNumber: string;
//   createdAt: string;
//   education: {
//     duration: string;
//     employmentStatus: string;
//     level: string;
//     loanRepayment: string;
//     monthlyIncome: [string, string];
//     officeEmail: string;
//     sector: string;
//   };
//   email: string;
//   guarantor: {
//     address: string;
//     firstName: string;
//     lastName: string;
//     gender: string;
//     phoneNumber: string;
//   };
//   id: number;
//   lastActiveDate: string;
//   orgName: string;
//   phoneNumber: string;
//   profile: {
//     address: string;
//     avatar: string;
//     bvn: string;
//     currency: string;
//     firstName: string;
//     gender: string;
//     lastName: string;
//     phoneNumber: string;
//   };
//   socials: {
//     facebook: string;
//     instagram: string;
//     twitter: string;
//   };
//   userName: string;
// }

const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export async function getUsers(): Promise<userTable[]> {
  const response = await fetch(url);
  const data = await response.json();

  const neededData = data.map((user: any) => {
    user.createdAt = new Date(user.createdAt);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      //   second: "numeric",
      hour12: true,
    };
    const date = user.createdAt.toLocaleDateString("en-US", options);
    user.createdAt = `${date}`;

    return {
      organisation: user.orgName,
      username: user.userName,
      email: user.email,
      phone: user.phoneNumber,
      dateJoined: user.createdAt,
      status: user.lastActiveDate,
    };
  });

  return neededData;
}

export async function getUser(id: number): Promise<UserDetails> {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
}

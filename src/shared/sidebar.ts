import { ReactComponent as User } from "/src/assets/customersidelist/users.svg";
import { ReactComponent as Guarantor } from "/src/assets/customersidelist/guarantors.svg";
import { ReactComponent as Loans } from "/src/assets/customersidelist/loans.svg";
import { ReactComponent as Decision } from "/src/assets/customersidelist/decision.svg";
import { ReactComponent as Savings } from "/src/assets/customersidelist/savings.svg";
import { ReactComponent as Requests } from "/src/assets/customersidelist/request.svg";
import { ReactComponent as Whitelist } from "/src/assets/customersidelist/whitelist.svg";
import { ReactComponent as Karma } from "/src/assets/customersidelist/karma.svg";

import { ReactComponent as Organisation } from "/src/assets/businesssidelist/organisation.svg";
import { ReactComponent as Loan } from "/src/assets/businesssidelist/loan.svg";
import { ReactComponent as Saving } from "/src/assets/businesssidelist/savings.svg";
import { ReactComponent as Fees } from "/src/assets/businesssidelist/fees.svg";
import { ReactComponent as Transactions } from "/src/assets/businesssidelist/transactions.svg";
import { ReactComponent as Services } from "/src/assets/businesssidelist/services.svg";
import { ReactComponent as Account } from "/src/assets/businesssidelist/account.svg";
import { ReactComponent as Settlements } from "/src/assets/businesssidelist/settlements.svg";
import { ReactComponent as Reports } from "/src/assets/businesssidelist/reports.svg";

import { ReactComponent as Preferences } from "/src/assets/settingssidelist/preferences.svg";
import { ReactComponent as Pricing } from "/src/assets/settingssidelist/pricing.svg";
import { ReactComponent as Audit } from "/src/assets/settingssidelist/audit.svg";
import { ReactComponent as Logout } from "/src/assets/settingssidelist/logout.svg";

export const customerSideBar = [
  {
    Icon: User,
    title: "Users",
  },
  {
    Icon: Guarantor,
    title: "Guarantors",
  },
  {
    Icon: Loans,
    title: "Loans",
  },
  {
    Icon: Decision,
    title: "Decision Models",
  },
  {
    Icon: Savings,
    title: "Savings",
  },
  {
    Icon: Requests,
    title: "Loan Requests",
  },
  {
    Icon: Whitelist,
    title: "Whitelist",
  },
  {
    Icon: Karma,
    title: "Karma",
  },
];

export const businessSideBar = [
  {
    Icon: Organisation,
    title: "Organisation",
  },
  {
    Icon: Loan,
    title: "Loan Products",
  },
  {
    Icon: Saving,
    title: "Savings Products",
  },
  {
    Icon: Fees,
    title: "Fees and Charges",
  },
  {
    Icon: Transactions,
    title: "Transactions",
  },
  {
    Icon: Services,
    title: "Services",
  },
  {
    Icon: Account,
    title: "Service Accounts",
  },
  {
    Icon: Settlements,
    title: "Settlements",
  },
  {
    Icon: Reports,
    title: "Reports",
  },
];

export const settingsSideBar = [
  {
    Icon: Preferences,
    title: "Preferences",
  },
  {
    Icon: Pricing,
    title: "Fees and Pricing",
  },
  {
    Icon: Audit,
    title: "Audit Logs",
  },
  {
    Icon: Logout,
    title: "Logout",
  }
];

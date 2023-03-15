export type userTable = {
    organisation: string;
    username: string;
    email: string;
    phone: string;
    dateJoined: string;
    status: string;
}

export type UserDetails = {
    accountBalance: string;
    accountNumber: string;
    createdAt: string;
    education: {
      duration: string;
      employmentStatus: string;
      level: string;
      loanRepayment: string;
      monthlyIncome: [string, string];
      officeEmail: string;
      sector: string;
    };
    email: string;
    guarantor: {
      address: string;
      firstName: string;
      lastName: string;
      gender: string;
      phoneNumber: string;
    };
    id: number;
    lastActiveDate: string;
    orgName: string;
    phoneNumber: string;
    profile: {
      address: string;
      avatar: string;
      bvn: string;
      currency: string;
      firstName: string;
      gender: string;
      lastName: string;
      phoneNumber: string;
    };
    socials: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    userName: string;
  }
const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export async function getUsers() {
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

export async function getUser(id: number) {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
}

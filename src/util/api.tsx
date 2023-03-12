const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

export async function getUsers(): Promise<any> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getUser(id: number): Promise<any> {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
}
export enum Role{
    Admin= 'Admin',
    Agent= 'Agent',
    Marchant= 'Marchant',
    Customer= 'Customer'
}
export interface UserModel{
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    nid: string;
    role?: Role;
}


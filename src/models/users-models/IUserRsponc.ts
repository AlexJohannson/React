import {IUser} from "./IUser.ts";

export interface IUserRsponc {
    total: number;
    skip: number;
    limit: number;
    user: IUser[];
}
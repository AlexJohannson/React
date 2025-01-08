import {IUser} from "./IUser.ts";

export interface IUserResponsModel {
    total: number;
    skip: number;
    limit: number;
    users: IUser[];
}
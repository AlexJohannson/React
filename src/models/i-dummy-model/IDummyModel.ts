import {IUser} from "../i-users-model/IUsersModel.ts";
import {IPost} from "../i-posts-model/IPostsModel.ts";

export interface IDummyModel{
    users: IUser[];
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}
import {IUserResponsModel} from "../models/user-models/IUserResponsModel.ts";
import {IResponsProduct} from "../models/user-carts-model/IResponsProduct.ts";

const dummyUrl = import.meta.env.VITE_DUMMY_API_URL;

export const dummyUserService = {
    getAllUsers: async (): Promise<IUserResponsModel> => {
        return await fetch(dummyUrl + '/users')
            .then(value => value.json());
    }
};
export const dummyCartService = {
    getCartsOfUsers: async(userId: string): Promise<IResponsProduct> => {
        return await fetch(dummyUrl + '/carts/user/' + userId)
            .then(res => res.json());
    }
};

import User from "../models/Users";

export const getUsers = async () => {

    const data = await User.find().lean();
    return data;
}

export const getUserByIdWrapper = async (params: any, arg: { id: string }) => {

    const data = await getUserById({ _id: arg.id });
    return data;
}

export const getUserById = async ({ _id }: any) => {
    console.log()
    const data = await User.findById(_id).lean();
    return data;
}


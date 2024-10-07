import { loginUser, logoutUser, registerUser } from "./auth/index.action";

export const server = {
    // auth actions
    registerUser,
    logoutUser,
    loginUser
}
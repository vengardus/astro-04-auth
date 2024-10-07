import { signOut } from "firebase/auth";
import { firebase } from "src/firebase/config";

export const logout = async () => {
    const resp: { succes: boolean } = {
        succes: false,
    }

    try {
        await signOut(firebase.auth);
        resp.succes = true;
    } catch (error) {
        
    }
    return resp
}
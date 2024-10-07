import type { AstroCookies } from "astro";
import { AuthErrorCodes, signInWithEmailAndPassword, type AuthError } from "firebase/auth";
import { firebase } from "src/firebase/config";

export const login = async (
  data: { email: string; password: string, rememberMe?: boolean },
  cookies: AstroCookies,
) => {
  const { email, password, rememberMe } = data;
  const resp: { succes: boolean; message?: string } = {
    succes: false,
  };

  // Cookies
  if (rememberMe) {
    cookies.set("email", email, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 año
      path: "/",
    });
  } else {
    cookies.delete("email", {
      path: "/",
    });
  }
  
  try {
    const user = await signInWithEmailAndPassword(
      firebase.auth,
      email,
      password,
    );
    resp.succes = user ? true : false;
  } catch (error) {
    const firebaseError = error as AuthError;
    resp.message = `Ocurrió un error en la autenticación: ${firebaseError.code}`;
   
  }
  return resp;
};

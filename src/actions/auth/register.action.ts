import type { AstroCookies } from "astro";
import { createUserWithEmailAndPassword, type AuthError } from "firebase/auth";
import { firebase } from "src/firebase/config";

export const register = async (
  data: { name: string; email: string; password: string; rememberMe?: boolean },
  cookies: AstroCookies,
): Promise<{ succes: boolean; message?: string }> => {
  const { name, email, password, rememberMe } = data;
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

  // Creación de usuario
  try {
    const user = await createUserWithEmailAndPassword(
      firebase.auth,
      email,
      password,
    );

    // Actualiar datos de usuario

    // Verificar el correo electronico

    resp.succes = true;
    //return user;
  } catch (error) {
    console.log(error);
    const firebaseError = error as AuthError;
    if (firebaseError.code === "auth/email-already-in-use") 
      resp.message = "El correo ya existe";
    else
      resp.message = "Ocurripo un error al registrar usuario. Error: " + error; //throw new Error("Ocurripo un error al registrar usuario");
   
  }

  return resp
};

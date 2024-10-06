import type { AstroCookies } from "astro";

export const register = async (
  
  data: { name: string; email: string; password: string; rememberMe?: boolean },
  cookies: AstroCookies,
) => {
  const { name, email, password, rememberMe } = data;

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
  
  //console.log(data);

  return {
    succes: true
  }
};

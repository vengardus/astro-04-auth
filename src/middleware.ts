import { defineMiddleware } from "astro:middleware";
import { firebase } from "./firebase/config";

const privateRoutes = ["/protected"];
const notAuthenticatedRoutes = ["/auth/login", "/auth/register"];

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  console.log("Middleware executed");
  //console.log(context.url);

  const isLoggedIn = !!firebase.auth.currentUser;
  const user = firebase.auth.currentUser;

  context.locals.isLoggedIn = isLoggedIn;   // definida en env.d.ts
  if ( user ) {
    context.locals.user = {
      name: user.displayName!,
      email: user.email!,
      photoURL: user.photoURL?? '',
      emailVerified: user.emailVerified
    }
  }

  if ( !isLoggedIn && privateRoutes.includes(context.url.pathname)) {
    return context.redirect("/");
  }
  
  if (isLoggedIn && notAuthenticatedRoutes.includes(context.url.pathname)) {
    return context.redirect("/");
  }

  return next();
});



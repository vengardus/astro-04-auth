import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/protected"];

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  console.log("Middleware executed");
  //console.log(context.url);

  const authHeaders = context.request.headers.get("authorization");
  console.log("authHeaders", authHeaders);

  if (privateRoutes.includes(context.url.pathname))
    return checkLocalAuth(authHeaders, next);

  return next();
});

const checkLocalAuth = (authHeaders: string | null, next: any) => {
  if (authHeaders) {
    const authValue = authHeaders.split(" ").at(-1) ?? "user:pass";
    const decodeValue = atob(authValue).split(":");
    const [user, pass] = decodeValue;

    return next();
  }
  // return new Response("Unauthorized", {
  //   status: 401,
  //   headers: {
  //     "WWW-Authenticate": 'Basic realm="Secure Area"',
  //   },

  // });
  return next();
};

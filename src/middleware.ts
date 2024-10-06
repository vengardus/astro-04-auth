import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/protected"];

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  console.log("Middleware executed");
  console.log(context.url);

  const authHeaders = context.request.headers.get("authorization");
  console.log("authHeaders", authHeaders);

  if (privateRoutes.includes(context.url.pathname)) {
    if (authHeaders) return next();
    else {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  }

  return next();
});

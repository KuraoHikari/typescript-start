import { withAuth } from "next-auth/middleware";

export default withAuth({
 pages: {
  signIn: "/",
 },
});

export const config = {
 mathcer: ["/users/:path*", "/conversations/:path*", "/users", "/conversations"],
};

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // means the only public route we are going to allow is our landing page.
    publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

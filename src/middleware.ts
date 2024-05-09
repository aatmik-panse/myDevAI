import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Example protected route
]);

// Integrate clerkMiddleware
export default clerkMiddleware(
  (auth, req) => {
    // Protect routes based on authentication status
    if (isProtectedRoute(req)) {
      auth().protect(); // Redirect unauthenticated users to sign-in route
      // If you want more control over authentication status, use auth().userId
    }
  },
  { debug: process.env.NODE_ENV === "development" }
); // Enable debugging in development mode

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // Add your existing matcher
};

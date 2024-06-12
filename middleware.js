import {
    clerkMiddleware,
    createRouteMatcher
  } from '@clerk/nextjs/server';
 
  // Define the routes that require authentication
  const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',  // Any route starting with /dashboard
    
  ]);
  

  // Middleware to protect the routes defined above
  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });
  
  // Configuration for the middleware matcher
export const config = {
  matcher: [
      '/((?!.*\\..*|_next).*)', // Match all routes except those containing a dot (.) or starting with _next
      '/',                      // Match the root route
      '/(api|trpc)(.*)'         // Match routes starting with /api or /trpc
  ],
}; 
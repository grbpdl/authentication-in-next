Live Demo Link:https://authentication-in-next.vercel.app/

Testing Screenshot:
![Screenshot 2024-08-29 141757](https://github.com/user-attachments/assets/979fc85a-d381-4dde-b49f-8c799b6966f3)


Task 4: Implement Authentication with Protected Routes in Next.js 14 

Objective:

Set up authentication in a Next.js 14 application and protect certain routes, demonstrating an understanding of both client-side and server-side rendering.


Requirements:
Login Page: Create a simple login page where users can enter a username and password. Authentication logic can be basic (e.g., match against a hardcoded user).
Protected Route: Implement a protected dashboard route that only authenticated users can access. If a user is not authenticated, they should be redirected to the login page.
Session Handling: Use cookies or JWTs to manage the user's session, ensuring that the authentication state persists across page reloads.


Testing:
Write tests to verify that unauthenticated users are redirected to the login page when trying to access the protected route.
Test the login process to ensure that users are properly authenticated and redirected to the dashboard upon successful login.

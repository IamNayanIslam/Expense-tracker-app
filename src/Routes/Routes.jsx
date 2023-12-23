import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contacts";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import SignupComplete from "../Pages/Auth/Signup/SignupComplete";
import Team from "../Pages/Users/Users";
import SingleMember from "../Pages/SingleMember/SingleMember";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "users",
        element: <Team />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        errorElement: <Error />,
      },
      {
        path: "team/:member",
        element: <SingleMember />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.member}`),
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "complete",
    element: <SignupComplete />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

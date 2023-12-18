import { Counter } from "./components/Counter";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PublicationCreate from "./pages/PublicationCreate";
import Publications from "./pages/Publications";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/publication',
    element: <Publications />
  },
  {
    path: '/register',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <SignIn />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/publ-create-tool',
    element: <PublicationCreate />
  }
];

export default AppRoutes;

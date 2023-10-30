import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import Publications from "./components/Publications/Publications";
import SignUp from "./components/SignUp/SignUp";

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
    path: '/signup',
    element: <SignUp />
  }
];

export default AppRoutes;

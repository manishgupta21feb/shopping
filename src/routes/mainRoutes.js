import HomePage from "../components/HomePage";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { ROUTES_PATH } from "../constants/routes";

const mainRoutes = [
  {
    path: ROUTES_PATH.HOME,
    exact: true,
    component: HomePage,
    private: false,
  },
  {
    path: ROUTES_PATH.LOGIN,
    exact: true,
    component: Login,
    private: false,
  },
  {
    path: ROUTES_PATH.SIGNUP,
    exact: true,
    component: SignUp,
    private: false,
  },
];

export default mainRoutes;

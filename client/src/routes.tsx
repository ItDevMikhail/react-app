import AdminPage from "./pages/adminPage";
import { ABOUT_ROUTE, ADMIN_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from "./utils/consts";
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import PersonalUserPage from './pages/personalUserPage';
import LoginPage from './pages/loginPage';
import RegisterPage from "./pages/registerPage";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
]

export const privateRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        path: USER_ROUTE + '/:id',
        Component: PersonalUserPage
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegisterPage
    },
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    },
]
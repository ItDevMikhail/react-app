import AdminPage from "./pages/adminPage";
import { ABOUT_ROUTE, ADMIN_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from "./utils/consts";
import AboutPage from './pages/aboutPage';
import AuthPage from './pages/authPage';
import HomePage from './pages/homePage';
import PersonalUserPage from './pages/personalUserPage';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    },
    {
        path: USER_ROUTE + '/:id',
        Component: PersonalUserPage
    },
]
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function Router() {
    const routes = useRoutes([
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            path: 'register',
            element: <RegisterPage />,
        },
        {
            element: <LoginPage  />,
            children: [
                { element: <Navigate to="/login" />, index: true },
                { path: '*', element: <Navigate to="/login" /> },
            ],
        },
    ]);

    return routes;
}
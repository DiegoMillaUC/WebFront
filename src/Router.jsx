import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import Layout from './pages/Layout';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros';
import LandingPage from './pages/LandingPage/LandingPage';
import Reglas from "./pages/Reglas/Reglas.jsx";
import PaginaPrincipal from './pages/PaginaPrincipal/PaginaPrincipal';
import WaitingPage from './pages/WaitingPage/WaitingPage';
import GamePage from './pages/GamePage/GamePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Logout from './pages/LoginPage/Logout';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        {
          path: 'reglas',
          element: <Reglas />
        },
        {
          path: 'sobre_nosotros',
          element: <SobreNosotros />
        },
        {
          path: 'pagina_principal',
          element: <PaginaPrincipal />
        },
        {
          path: 'waiting_page',
          element: <WaitingPage />
        },
        {
          path: 'game_page',
          element: <GamePage />
        },
        {
          path: 'signup_page',
          element: <SignupPage />
        },
        {
          path: 'login_page',
          element: <LoginPage />
        },
        {
          path: 'logout',
          element: <Logout />
        }

      ]
    },
    {
      path: '*', 
      loader: () => {
        return redirect('/')
      }
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default Router;
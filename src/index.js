import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { motion, useScroll } from 'framer-motion';
import { useCookies } from 'react-cookie';
import './index.css';
import App from './App';
import { Aboutus, Beesafe, Booknow, Contactus, Menu, Storelocations } from './pages';
import Cookies from './component/card/Cookies';
import { LoadingScreen } from './component';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
};

const Layout = () => {
  const [cookies] = useCookies(["cookieConsent"]);
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <LoadingScreen onFinish={handleLoadingFinish} />
      ) : (
        <>
          <ScrollProgressBar />
          <Outlet />
          {!cookies.cookieConsent && <Cookies />}
        </>
      )}
    </div>
  );
};

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/book-now',
        element: <Booknow />,
      },
      {
        path: '/beesafe',
        element: <Beesafe />,
      },
      {
        path: '/contactus',
        element: <Contactus />,
      },
      {
        path: '/aboutus',
        element: <Aboutus />,
      },
      {
        path: '/storelocations',
        element: <Storelocations />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);

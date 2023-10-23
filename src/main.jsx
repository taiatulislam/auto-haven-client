import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root.jsx';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ErrorPage from './pages/ErrorPage';
import UpdateProduct from './pages/UpdateProduct';
import BrandDetails from './pages/BrandDetails';
import CarDetails from './pages/CarDetails';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct /></PrivateRoute>,
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)
      },
      {
        path: "/cart/:email",
        element: <PrivateRoute><Cart /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.email}`)
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/brandDetails/:name",
        element: <PrivateRoute><BrandDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.name}`)
      },
      {
        path: "/carDetails/:id",
        element: <CarDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

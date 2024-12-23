import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Layouts/Home.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Auth from './Layouts/Auth.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AllFoods from './Pages/AllFoods.jsx';
import Gallery from './Pages/Gallery.jsx';
import MyFoods from './Pages/MyFoods.jsx';
import AddFood from './Pages/AddFood.jsx';
import MyOrders from './Pages/MyOrders.jsx';
import SingleFood from './Pages/SingleFood.jsx';
import FoodPurchase from './Pages/FoodPurchase.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import UpdateFood from './Pages/UpdateFood.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/foodPurchase/:id",
        element: <PrivateRoute>
          <FoodPurchase></FoodPurchase>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/myFoods",
        element: <PrivateRoute>
          <MyFoods></MyFoods>
        </PrivateRoute>
      },
      {
        path: "/addFood",
        element: <PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>
      },
      {
        path: "/myOrders",
        element: <PrivateRoute>
          <MyOrders></MyOrders>
        </PrivateRoute>
      },
      {
        path: "/updateFood/:id",
        element: <PrivateRoute>
          <UpdateFood></UpdateFood>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
    ]
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

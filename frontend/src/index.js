import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { CartContextProvider } from './Context/CartContext';
import App from './App';
import ErrorPage from './Screens/ErrorScreen';
import Home from './Screens/HomeScreen'
import About from './Screens/AboutScreen'
import Contact from './Screens/ContactScreen'
import Products from './Screens/ProductsScreen'
import ProductDetails from './Screens/ProductScreen'
import Cart from './Screens/CartScreen'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/products/:productID", 
        element: <ProductDetails />
      }, 
      // {
      //   path: "/products/:productType", 
      //   element: <Products />
      // },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


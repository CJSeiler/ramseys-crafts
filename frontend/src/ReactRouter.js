import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorScreen from "./Screens/ErrorScreen";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import ContactScreen from "./Screens/ContactScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import ProductDetailsScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen  from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderDetailsScreen from "./Screens/OrderDetailsScreen";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorScreen />,
      children: [
        {
          path: "/",
          element: <HomeScreen />
        },
        {
          path: "/about",
          element: <AboutScreen />
        },
        {
          path: "/contact",
          element: <ContactScreen />
        },
        {
          path: "/products",
          element: <ProductsScreen/>,
        },
        {
          path: "/products/:productId", 
          element: <ProductDetailsScreen />
        }, 
        {
          path: "/cart",
          element: <CartScreen />
        },
        {
          path: "/login",
          element: <LoginScreen />
        },
        {
          path: "/register",
          element: <RegisterScreen />
        },
        {
          path: "/profile",
          element: <ProfileScreen />
        },
        {
          path: "/shipping",
          element: <ShippingScreen />
        },
        {
          path: "/payment",
          element: <PaymentScreen />
        },
        {
          path: "/placeorder",
          element: <PlaceOrderScreen />
        },
        {
          path: "/order/:id",
          element: <OrderDetailsScreen />
        }
      ]
    }
  ]);


  export default router

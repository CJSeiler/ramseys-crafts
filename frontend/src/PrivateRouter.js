import { Navigate } from "react-router-dom";

const  PrivateRouter = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("userInfo");

  if (token) {
    return <Component {...rest} />;
  } else {
    return <Navigate replace={true} to={"/login"} />;
  }
};

export default PrivateRouter;

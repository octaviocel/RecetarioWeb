import React, { useEffect } from "react";
import SecureLS from "secure-ls";

import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { recover } from "./reducers/AuthReducer";
import { createRoutes } from "./routes/authRoutes";
import { publicRoutes } from "./routes/publicRoute";

function App() {
  const dispatch = useDispatch();
  const ls = new SecureLS({ encodingType: "aes" });
  const currentUser = useSelector((state) => state.auth.user);

  const getUser = () => {
    const auth = ls.get("_user");
    const aT = ls.get("_accessToken");
    const rT = ls.get("_refreshToken");

    if (auth !== "" && aT !== "" && rT !== "") {
      let user = JSON.parse(auth);
      dispatch(recover(user));
    }
  };

  const getRoutes = () => {
    if (!currentUser) return publicRoutes;
    return createRoutes(currentUser.role);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <RouterProvider router={createBrowserRouter(getRoutes())}>
      <div id="wrapper" className="wrapper">
        <ToastContainer />
      </div>
    </RouterProvider>
  );
}

export default App;

import React, { useEffect } from "react";
import SecureLS from "secure-ls";

import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoutes } from "./routes/authRoutes";
import { publicRoutes } from "./routes/publicRoute";
import { useFindProfileMutation } from "./slices/AuthSlice";

function App() {
  const ls = new SecureLS({ encodingType: "aes" });
  const currentUser = useSelector((state) => state.auth.user);
  const [findProfile] = useFindProfileMutation();

  const getUser = () => {
    const auth = ls.get("_user");
    const aT = ls.get("_accessToken");
    const rT = ls.get("_refreshToken");

    if (auth !== "" && aT !== "" && rT !== "") {
      let user = JSON.parse(auth);
      findProfile(user.id);
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

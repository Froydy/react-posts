import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../Router/Routs";
import { AuthContext } from "../context/index.js";
import Login from "../pages/Login.jsx";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}

      {/* Для обработки всех остальных путей */}
    </Routes>
  );
};

export default AppRouter;

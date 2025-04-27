import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout";

const HomePage = lazy(() => import("../pages/Home"));
const BootstrapPage = lazy(() => import("../pages/BootstrapPage"));
const Recipes = lazy(() => import("../pages/Recipes"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="bootstrap" element={<BootstrapPage />} />
        <Route path="recipes" element={<Recipes />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

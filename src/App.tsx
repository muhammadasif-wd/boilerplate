import React from "react";
import { Route, Routes } from "react-router";
import Login from "./root/layout/pages/auth/login";
import Registration from "./root/layout/pages/auth/registration";
import Home from "./root/layout/pages/home";
import { rootRoutes } from "./root/layout/root-routes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth/login" element={<Login />}></Route>
      <Route path="/auth/signup" element={<Registration />}></Route>
      {rootRoutes.map(({ Component, path }, index) => (
        <Route key={index + 1154} path="/" element={<Home />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path={path} element={<Component />}></Route>
        </Route>
      ))}
    </Routes>
  );
};

export default App;

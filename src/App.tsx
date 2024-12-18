import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./root/document-management/layout/layout";
import DashboardMessages from "./root/document-management/layout/pages/dashboard-messages";
import DashboardTasks from "./root/document-management/layout/pages/dashboard-tasks";
import DocumentManagement from "./root/document-management/layout/pages/document-management";
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
      <Route path="/document-management" element={<Layout />}>
        <Route index element={<DocumentManagement />} />
        <Route path="tasks" element={<DashboardTasks />} />
        <Route path="messages" element={<DashboardMessages />} />
      </Route>
      {/* <Route path="/document-management" element={<DocumentManagement />} />
      <Route path="messages" element={<DashboardMessages />} />
      <Route path="tasks" element={<DashboardTasks />} /> */}
    </Routes>
  );
};

export default App;

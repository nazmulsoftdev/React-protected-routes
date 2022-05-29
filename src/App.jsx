import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/Notfound";
import ProtectedRoute from "./components/routes";
import ContextAPI from "./context/ContextAPI";

function App() {
  const { isLogin } = useContext(ContextAPI);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

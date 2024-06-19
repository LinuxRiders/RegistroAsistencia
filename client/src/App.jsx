import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tabla from "./components/Tabla";
import SignIn from "./pages/Login/SignIn";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useAuth } from "./context/AuthProvider";
import UserForm from "./pages/Register/UserForm";
import Asistencia from "./pages/Asistencia/Asistencia";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="login" element={<SignIn />} />

      <Route
        element={<ProtectedRoute validate={isAuthenticated} to={"login"} />}
      >
        <Route path="" element={<Home />}>
          <Route path="" element={<Asistencia />} />
          <Route path="register" element={<UserForm />} />
          <Route path="table" element={<Tabla />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

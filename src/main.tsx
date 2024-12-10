import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"; // Correct name for the registration form

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route for Login Form */}
        <Route path="/" element={<LoginForm />} />

        {/* Route for Register Form */}
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

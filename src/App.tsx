import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./Pages/Signin";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgetPassword";
import Dashboard from "./Pages/Dashboard";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  // let isAuth = localStorage.getItem("AUTH_TOKEN");

  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
      {/* {isAuth ? ( */}
      <Route path="/" element={<Dashboard />}>
        {/* <Route index element={<ECommerce />} /> */}
      </Route>
      {/* ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )} */}
    </Routes>
  );
}

export default App;

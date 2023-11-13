import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./Pages/Signin";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgetPassword";
import Dashboard from "./Pages/Dashboard";
import Expense from "./Pages/Expense";
import AddExpense from "./Pages/Expense/AddExpense";
import Reports from "./Pages/Report";
import HomePage from "./Pages/HomePage";
import HistoryPage from "./Pages/History";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  // let isAuth = localStorage.getItem("AUTH_TOKEN");

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/forgetpassword" element={<ForgotPassword />} />
      {/* {isAuth ? ( */}
      <Route path="/Dashboard" element={<Dashboard />}>
        <Route path="/Dashboard/Home" element={<HomePage />} />
        <Route path="/Dashboard/Expense" element={<Expense />} />
        <Route path="/Dashboard/Addexpense" element={<AddExpense />} />
        <Route path="/Dashboard/History" element={<HistoryPage />} />
        <Route path="/Dashboard/Reports" element={<Reports />} />
      </Route>
      {/* ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )} */}
    </Routes>
  );
}

export default App;

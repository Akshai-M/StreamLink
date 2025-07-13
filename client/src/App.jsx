import React from "react";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import { Navigate, Route, Routes } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/Axios.js";

function App() {
  const {
    data: authData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiosInstance.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return res.data;
    },
    retry: false,
  });

  const authUser = authData?.user;
  // console.log(data);
  const pathRoutes = [
    {
      path: "/",
      element: authUser ? <HomePage /> : <Navigate to="/login" />,
    },
    {
      path: "/signup",
      element: !authUser ? <SignUpPage /> : <Navigate to="/" />,
    },
    {
      path: "/login",
      element: !authUser ? <LoginPage /> : <Navigate to="/" />,
    },
    {
      path: "/notifications",
      element: authUser ? <NotificationsPage /> : <Navigate to="/login" />,
    },
    {
      path: "/call/:id",
      element: authUser ? <CallPage /> : <Navigate to="/login" />,
    },
    {
      path: "/chat/:id",
      element: authUser ? <ChatPage /> : <Navigate to="/login" />,
    },
    {
      path: "/onboarding",
      element: authUser ? <OnboardingPage /> : <Navigate to="/login" />,
    },
  ];
  return (
    <Routes>
      {pathRoutes.map((index) => (
        <Route path={index.path} element={index.element} />
      ))}
    </Routes>
  );
}

export default App;

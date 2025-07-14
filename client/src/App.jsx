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
import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";

function App() {
  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if (isLoading) return <PageLoader />;
  // console.log(data);
  const pathRoutes = [
    {
      path: "/",
      element:
        isAuthenticated && isOnboarded ? (
          <HomePage />
        ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
        ),
    },
    {
      path: "/signup",
      element: !isAuthenticated ? <SignUpPage /> : <Navigate to="/" />,
    },
    {
      path: "/login",
      element: !isAuthenticated ? <LoginPage /> : <Navigate to="/" />,
    },
    {
      path: "/notifications",
      element: isAuthenticated ? (
        <NotificationsPage />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/call/:id",
      element: isAuthenticated ? <CallPage /> : <Navigate to="/login" />,
    },
    {
      path: "/chat/:id",
      element: isAuthenticated ? <ChatPage /> : <Navigate to="/login" />,
    },
    {
      path: "/onboarding",
      element: isAuthenticated ? <OnboardingPage /> : <Navigate to="/login" />,
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

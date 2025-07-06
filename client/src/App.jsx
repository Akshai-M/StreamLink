import React from "react";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import { Route, Routes } from "react-router";

function App() {
  const pathRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/notification",
      element: <NotificationsPage />,
    },
    {
      path: "/call",
      element: <CallPage />,
    },
    {
      path: "/chat",
      element: <ChatPage />,
    },
    {
      path: "/onboarding",
      element: <OnboardingPage />,
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

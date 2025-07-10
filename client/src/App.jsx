import React from "react";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import { Route, Routes } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/Axios.js";

function App() {
  const { data: authData, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiosInstance.get("https://jsonplaceholder.typicode.com/todos")
      return res.data
    }, retry: false
  })

  const authUser = authData?.user
  console.log(data)
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

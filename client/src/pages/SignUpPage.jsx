import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";

import useSignUp from "../hooks/useSignUp";

function SignUpPage() {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { isPending, error, signupMutation } = useSignUp();
const navigate = useNavigate();
  const handleSignup = async (e) => {
  e.preventDefault();
  await signupMutation(signupData);
  navigate("/login");
};

  return (
    <></>
  );
}

export default SignUpPage;

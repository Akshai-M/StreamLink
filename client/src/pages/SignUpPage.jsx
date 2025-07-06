import React from "react";
import toast from "react-hot-toast";

function SignUpPage() {
  return (
    <button onClick={() => toast.error("Hi! im created")}>
      Create toast
      
    </button>
  );
}

export default SignUpPage;

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
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          
          

          

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Create an Account</h2>
                  <p className="text-sm opacity-70">
                    Join Streamify and start your language learning adventure!
                  </p>
                </div>

                <div className="space-y-3">
                  
                 
                

                  
                </div>

                

                
              </div>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default SignUpPage;

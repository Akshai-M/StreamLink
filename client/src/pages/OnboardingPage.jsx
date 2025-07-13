import React, { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { QueryCache, QueryClient, useMutation } from "@tanstack/react-query";
import { completeOnboarding } from "../lib/api";

function OnboardingPage() {
  const { authUser } = useAuthUser()

  const {formState, setFormState} = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  })

  

 
  return <div>Onboarding</div>;
}

export default OnboardingPage;

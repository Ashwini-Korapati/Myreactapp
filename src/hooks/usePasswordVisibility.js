import { useState } from "react";

const usePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return {
    showPassword,
    showConfirmPassword,
    togglePassword: () => setShowPassword(prev => !prev),
    toggleConfirmPassword: () => setShowConfirmPassword(prev => !prev)
  };
};

export default usePasswordVisibility;

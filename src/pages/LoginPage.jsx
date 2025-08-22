
import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, ArrowRight, LogIn } from "lucide-react";
import InputField from "../components/InputField";
import ActionButton from "../components/ActionButton";
import FormHeader from "../components/FormHeader";
import FormContainer from "../components/FormContainer";
import FormFooter from "../components/FormFooter";
import useForm from "../hooks/useForm";
import { validators } from "../utils/validators";

const LoginPage = () => {
  const navigate = useNavigate();
  const { formData, errors, isLoading, setIsLoading, handleChange, validateForm } = useForm(
    { username: '', password: '' },
    { username: validators.username, password: validators.password }
  );

  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = () => {
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <FormContainer>
      <FormHeader
        icon={LogIn}
        title="Welcome Back"
        subtitle="Sign in to your account"
        gradientFrom="from-blue-500"
        gradientTo="to-purple-600"
      />

      <div className="space-y-6">
        <InputField
          icon={User}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />

        <InputField
          icon={Lock}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          showPasswordToggle={true}
          onTogglePassword={() => setShowPassword(prev => !prev)}
        />

        <ActionButton
          onClick={handleSubmit}
          disabled={isLoading}
          loading={isLoading}
          gradientFrom="from-blue-500"
          gradientTo="to-purple-600"
        >
          <span>Sign In</span>
          <ArrowRight className="w-5 h-5" />
        </ActionButton>
      </div>

      <FormFooter
        text="Don't have an account?"
        linkText="Sign up"
        onLinkClick={() => navigate("/signup")}
        linkColor="text-blue-600 hover:text-purple-600"
      />
    </FormContainer>
  );
};

export default LoginPage;

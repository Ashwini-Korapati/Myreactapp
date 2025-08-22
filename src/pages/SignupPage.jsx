import React from "react";
import { User, Mail, Lock, Phone, UserPlus, CheckCircle } from "lucide-react";
import InputField from "../components/InputField";
import ActionButton from "../components/ActionButton";
import FormHeader from "../components/FormHeader";
import FormContainer from "../components/FormContainer";
import FormFooter from "../components/FormFooter";
import useForm from "../hooks/useForm";
import { validators } from "../utils/validators";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const { formData, errors, isLoading, setIsLoading, handleChange, validateForm } = useForm(
    { name: '', username: '', email: '', phone: '', password: '', confirmPassword: '' },
    { name: validators.name, username: validators.username, email: validators.email, phone: validators.phone, password: validators.password, confirmPassword: validators.confirmPassword }
  );

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Signup successful!");
      navigate("/login");
    }, 1000);
  };

  return (
    <FormContainer>
      <FormHeader
        icon={UserPlus}
        title="Create New Account"
        subtitle="Join us today"
        gradientFrom="from-green-500"
        gradientTo="to-blue-600"
      />

      <div className="space-y-5">
        {/* Grid for input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            icon={User}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
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
            icon={Mail}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            icon={Phone}
            type="tel"
            name="phone"
            placeholder="Phone (+1234567890)"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
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
          <InputField
            icon={Lock}
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            showPasswordToggle={true}
            onTogglePassword={() => setShowConfirm(prev => !prev)}
          />
        </div>

        <ActionButton
          onClick={handleSubmit}
          disabled={isLoading}
          loading={isLoading}
          gradientFrom="from-green-500"
          gradientTo="to-blue-600"
        >
          <span>Create Account</span>
          <CheckCircle className="w-5 h-5" />
        </ActionButton>
      </div>

      <FormFooter
        text="Already have an account?"
        linkText="Sign in"
        onLinkClick={() => navigate("/login")}
        linkColor="text-green-600 hover:text-blue-600"
      />
    </FormContainer>
  );
};

export default SignupPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import InputField from "./InputField";
import Button from "./Button";

function LoginPage() {
  const navigate = useNavigate(); // Initialize navigate function

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
  };

  // Navigate to Signup Page
  const handleSignup = () => {
    navigate("/signup"); // Ensure "/signup" route exists in App.js
  };

  return (
    <main className="flex flex-col items-center px-20 pt-52 bg-slate-200 pb-[482px] max-md:px-5 max-md:py-24">
      <section className="flex flex-col items-start w-[350px]">
        <h1 className="text-3xl font-bold text-sky-900">MANAGER LOGIN</h1>
        <p className="mt-3 text-sky-900">
          Don't have an account?{" "}
          <button onClick={handleSignup} className="underline text-blue-500">
            Signup
          </button>
        </p>

        <form onSubmit={handleLogin} className="w-full">
          <InputField label="Email" type="email" value={email} onChange={handleEmailChange} required />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            required
          />
          <Button type="submit" text="LOG IN" />
        </form>
      </section>
    </main>
  );
}

export default LoginPage;

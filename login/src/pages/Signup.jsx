"use client";
import React, { useState } from "react";

const SignUpPage = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-56 text-sm font-medium leading-none bg-slate-200 max-md:px-5 max-md:py-24">
      <section className="max-w-full w-[354px]">
        <h1 className="text-3xl font-bold tracking-tighter leading-none text-sky-900">
          MANAGER SIGN UP
        </h1>
        <p className="mt-7 leading-4 text-sky-900">
          already have account?{" "}
          <a href="#" className="underline text-[#028BBF]">
            Login
          </a>
        </p>

        <form className="mt-7">
          <InputField
            label="Enter name"
            placeholder="Full Name..."
            type="text"
          />
          <InputField label="Mail" placeholder="Email@email.com" type="email" />
          <PasswordField label="Password" placeholder="********" />
          <PasswordField label="Confirm password" placeholder="********" />
          <CheckboxField label="logged me in" />
          <Button text="SIGN UP" />
        </form>
      </section>
    </main>
  );
};

const InputField = ({ label, placeholder, type }) => {
  return (
    <div className="flex flex-col mt-7 w-full">
      <label
        htmlFor={label.toLowerCase().replace(/\s/g, "-")}
        className="self-start text-sky-600"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(/\s/g, "-")}
        placeholder={placeholder}
        className="px-3 py-3.5 mt-2 rounded-3xl border border-solid border-[#028BBF] text-slate-600 w-full"
        aria-label={label}
      />
    </div>
  );
};

const PasswordField = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col mt-7 w-full">
      <label
        htmlFor={label.toLowerCase().replace(/\s/g, "-")}
        className="self-start text-sky-600"
      >
        {label}
      </label>
      <div className="flex gap-5 justify-between px-3 py-3 mt-2 rounded-3xl border border-solid border-[#028BBF] text-slate-600">
        <input
          type={showPassword ? "text" : "password"}
          id={label.toLowerCase().replace(/\s/g, "-")}
          placeholder={placeholder}
          className="bg-transparent border-none outline-none w-full"
          aria-label={label}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="focus:outline-none"
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>
    </div>
  );
};

const CheckboxField = ({ label }) => {
  return (
    <div className="flex gap-2 mt-7 max-w-full text-sky-600 rounded">
      <input
        type="checkbox"
        id="remember-me"
        className="w-4 h-4"
        aria-label={label}
      />
      <label htmlFor="remember-me" className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="mt-7 w-full text-base font-semibold text-blue-50 bg-sky-900 rounded-3xl px-9 py-3"
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default SignUpPage;

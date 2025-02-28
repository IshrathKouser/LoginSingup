import React from "react";

function InputField({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  showPassword,
  togglePasswordVisibility,
}) {
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div className="w-full mb-6">
      <label
        className="block mt-6 text-sky-600"
        htmlFor={`input-${label.toLowerCase()}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={`input-${label.toLowerCase()}`}
          type={inputType}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-3 py-3.5 mt-2 rounded-3xl border border-sky-600 text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-600"
          aria-label={label}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/430f8f37dd2cbd5410a966c7a795b2b0c6a409eab74ffc6a35a3f406f4362312"
              alt={showPassword ? "Hide password" : "Show password"}
              className="w-[22px]"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;

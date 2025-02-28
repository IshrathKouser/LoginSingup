import React from "react";

function Button({ text, type = "button", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full mt-8 text-base font-semibold text-blue-50 bg-sky-900 rounded-3xl ${className}`}
      aria-label={text}
    >
      <div className="px-9 py-3 bg-sky-900 rounded-3xl">{text}</div>
    </button>
  );
}

export default Button;

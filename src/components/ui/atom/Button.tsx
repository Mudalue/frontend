import React, { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
  size?: "sm" | "md" | "lg"; // Define the allowed size values as optional
  color?: string; // Allow any valid CSS color value as optional
  width?: string; // Allow any valid CSS width value as optional
  disabled?: boolean; // Allow boolean value for 'disabled' as optional
};

const Button: React.FC<ButtonProps> = ({
  text,
  onclick,
  size = "md", // Default size to "md" if not provided
  color = "blue", // Default color to "blue" if not provided
  width = "auto", // Default width to "auto" if not provided
  disabled = false, // Default disabled to false if not provided
}) => {
  return (
    <>
      <button
        className={`btn btn-${size} fw-bold text-light`}
        style={{
          backgroundColor: color,
          boxShadow: "none",
          padding: "9px 10px",
          width,
          fontSize: 14,
          borderRadius: 8,
        }}
        onClick={onclick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

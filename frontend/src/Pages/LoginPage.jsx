import * as React from "react";
import { LoginForm } from "../Components/Login/LoginForm";
import AltoContraste from "../Components/Acessibility/AltoContraste/AltoContraste";
import DarkMode from "../Components/Acessibility/DarkMode/Darkmode";

export function LoginPage() {
  return (
    <>
      <div className="login-container">
        <LoginForm />
        <DarkMode />
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
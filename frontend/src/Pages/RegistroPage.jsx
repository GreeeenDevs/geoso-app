import * as React from "react";
import RegistrationForm from "../Components/Registro/RegistrationForm";
import AltoContraste from "../Components/Acessibility/AltoContraste/AltoContraste";
import DarkMode from "../Components/Acessibility/DarkMode/Darkmode";

export function RegistroPage() {
  return (
    <>
      <div className="login-container">
        <RegistrationForm />
        <AltoContraste />
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
import * as React from "react";
import { RegistrationForm } from "./Registro/RegistrationForm";
import AltoContraste from "./AltoContraste/AltoContraste";
import DarkMode from "./darkmode/Darkmode";
import Hero from "./faq/Hero";

export function RegistrationForm() {
  return (
    <>
      <div className="login-container">
        <Hero />
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
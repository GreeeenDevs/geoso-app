/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { LoginForm } from "../Components/Login/LoginForm";
import AltoContraste from "../Components/Acessibility/AltoContraste/AltoContraste";
// import DarkMode from "../Components/Acessibility/DarkMode/Darkmode";
// import Hero from "../Components/FAQ/FAQHero/FAQHero";

export function LoginPage() {
  return (
    <>
      <div className="login-container">
        <LoginForm />
        <AltoContraste />
        {/* <DarkMode /> */}
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
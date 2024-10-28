import * as React from "react";
import { LoginForm } from "../Components/Login/LoginForm";
import AltoContraste from "../Components/Acessibility/AltoContraste/AltoContraste";
import DarkMode from "../Components/Acessibility/DarkMode/Darkmode";
import Hero from "../Components/FAQ/FAQHero/FAQHero";
import Footer from "../components/Footer/Footer/Footer";

export function LoginPage() {
  return (
    <>
      <div className="login-container">
        <Hero />
        <LoginForm />
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
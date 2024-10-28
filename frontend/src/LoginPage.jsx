import * as React from "react";
import { LoginForm } from "./Login/LoginForm";
import AltoContraste from "./AltoContraste/AltoContraste";
import DarkMode from "./darkmode/Darkmode";
import Hero from "./faq/Hero";
import Footer from "./footer/Footer";

export function LoginPage() {
  return (
    <>
      <div className="login-container">
        <Hero />
        <LoginForm />
        <Footer />
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
import * as React from "react";
import { LoginForm } from "./Login/LoginForm";
import { SocialFooter } from "./SocialFooter";
import AltoContraste from "./AltoContraste/AltoContraste";
import DarkMode from "./darkmode/Darkmode";
import Hero from "./faq/Hero";

export function LoginPage() {
  return (
    <>
      <div className="login-container">
        <Hero />
        <LoginForm />
        <SocialFooter />
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
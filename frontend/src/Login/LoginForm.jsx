import * as React from "react";

export function LoginForm() {
  return (
    <>
      <main className="login-section">
        <form className="login-form">
          <h1 className="form-title">Acesse sua conta</h1>
          
          <div className="form-group">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="visually-hidden">Senha</label>
            <input type="password" id="password" className="form-input" placeholder="Senha" required />
          </div>
          
          <button type="submit" className="submit-btn">Entrar</button>
          
          <a href="#recover" className="recover-link">Recuperar senha</a>
          
          <div className="signup-prompt">
            <span>Ainda não é cadastrado?</span>
            <a href="#signup">Clique aqui!</a>
          </div>
        </form>
      </main>
      <style jsx>{`
        .login-section {
          background-color: #fff;
          display: flex;
          width: 100%;
          justify-content: center;
          padding: 191px 80px;
        }
        .login-form {
          background-color: #fff;
          width: 622px;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          padding: 47px 64px;
          border: 1px solid rgba(0, 0, 0, 0.5);
        }
        .form-title {
          color: #000;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.36px;
          margin-bottom: 43px;
        }
        .form-group {
          margin-bottom: 24px;
        }
        .form-input {
          width: 100%;
          padding: 8px 14px;
          border: 1px solid rgba(0, 0, 0, 0.5);
          font: 400 15px Montserrat, sans-serif;
        }
        .submit-btn {
          align-self: center;
          width: 130px;
          padding: 11px 0;
          border: none;
          border-radius: 6px;
          background-color: #00d084;
          color: #fff;
          font: 500 15px Montserrat, sans-serif;
          cursor: pointer;
        }
        .recover-link {
          text-align: center;
          margin: 24px 0;
          color: rgba(0, 0, 0, 0.8);
          text-decoration: none;
        }
        .signup-prompt {
          display: flex;
          gap: 7px;
          justify-content: center;
          font: 400 15px Montserrat, sans-serif;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        @media (max-width: 991px) {
          .login-section {
            padding: 100px 20px;
          }
          .login-form {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
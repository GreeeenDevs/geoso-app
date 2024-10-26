import * as React from "react";
import InputField from "./InputFild";
import { formFields } from "./formData";

function RegistrationForm() {
  return (
    <form className="registration-container">
      <section className="registration-form">
        <h1 className="form-title">Informe seus dados</h1>
        
        <div className="name-fields">
          {formFields.slice(0, 2).map((field) => (
            <InputField
              key={field.id}
              label={field.label}
              type={field.type}
              id={field.id}
            />
          ))}
        </div>

        {formFields.slice(2).map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            type={field.type}
            id={field.id}
          />
        ))}

        <button type="submit" className="register-button">
          Registrar
        </button>
      </section>

      <style jsx>{`
        .registration-container {
          display: flex;
          max-width: 622px;
          flex-direction: column;
          color: rgba(0, 0, 0, 0.8);
          letter-spacing: -0.22px;
          font: 400 15px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .registration-form {
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 64px;
          border: 1px solid rgba(0, 0, 0, 0.5);
        }

        .form-title {
          color: #000;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.36px;
          margin: 0;
        }

        .name-fields {
          display: flex;
          margin-top: 61px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .register-button {
          border-radius: 6px;
          background-color: rgb(0, 208, 132);
          align-self: center;
          margin-top: 24px;
          width: 130px;
          color: #fff;
          font-weight: 500;
          text-align: center;
          padding: 11px 31px;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .registration-form {
            padding: 20px;
          }

          .name-fields {
            margin-top: 40px;
          }

          .register-button {
            padding: 11px 20px;
          }
        }
      `}</style>
    </form>
  );
}

export default RegistrationForm;
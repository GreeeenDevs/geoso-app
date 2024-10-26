import * as React from "react";

function InputField({ label, type, id }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="visually-hidden">{label}</label>
      <input
        type={type}
        id={id}
        className="input-field"
        placeholder={label}
        aria-label={label}
      />
      
      <style jsx>{`
        .input-wrapper {
          display: flex;
          flex-direction: column;
        }

        .input-field {
          background-color: #fff;
          padding: 8px 14px;
          border: 1px solid rgba(0, 0, 0, 0.5);
          line-height: 1.6;
          font: inherit;
          min-height: 48px;
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
          .input-field {
            padding-right: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default InputField;
/* eslint-disable react/prop-types */
import styles from './InputField.module.css';
import { useTheme } from '../Acessibility/AltoContraste/ThemeContext';

function InputField({ label, type, id }) {
  const { highContrast } = useTheme();

  const inputStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  // Estilo para o placeholder
  const placeholderStyle = `
    ::placeholder {
      color: ${highContrast ? 'lightgray' : 'gray'};
    }
  `;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.visuallyHidden}>{label}</label>
      <input
        type={type}
        id={id}
        className={styles.inputField}
        style={inputStyle}
        placeholder={label}
        aria-label={label}
      />
      <style>{placeholderStyle}</style>
    </div>
  );
}

export default InputField;
import styles from './RegistrationForm.module.css';
import InputField from "./InputField";
import { formFields } from "./FormData";
import { useTheme } from '../Acessibility/AltoContraste/ThemeContext';

function RegistrationForm() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <form style={sectionStyle} className={styles.registrationContainer}>
      <section style={sectionStyle} className={styles.registrationForm}>
        <h1 className={styles.formTitle}>Informe seus dados</h1>
        
        <div className={styles.nameFields}>
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

        <button type="submit" className={styles.registerButton}>
          Registrar
        </button>
      </section>
    </form>
  );
}

export default RegistrationForm;
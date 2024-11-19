import styles from './LoginForm.module.css';
import { useTheme } from '../Acessibility/AltoContraste/ThemeContext';

export function LoginForm() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  const inputStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <>
      <main style={sectionStyle} className={styles.loginSection}>
        <form style={sectionStyle} className={styles.loginForm}>
          <h1 className={styles.formTitle}>Acesse sua conta</h1>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
            <input type="email" id="email" style={inputStyle} className={styles.formInput} placeholder="Email" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.visuallyHidden}>Senha</label>
            <input type="password" id="password" style={inputStyle} className={styles.formInput} placeholder="Senha" required />
          </div>
          
          <button type="submit" className={styles.submitBtn}>Entrar</button>
          
          <a href="#recover" className={styles.recoverLink}>Recuperar senha</a>
          
          <div className={styles.signupPrompt}>
            <span>Ainda não é cadastrado?</span>
            <a href="/registro">Clique aqui!</a>
          </div>
          <div className={styles.signupPromptEx}>
            <a href="/registro">Clique aqui!</a>
          </div>
        </form>
      </main>
    </>
  );
}
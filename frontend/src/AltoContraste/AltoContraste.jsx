import React, { useState } from 'react';

const AltoContraste = () => {
  // Estado para controlar se estamos em modo de alto contraste
  const [highContrast, setHighContrast] = useState(false);

  // Cores normais e de alto contraste
  const normalColors = {
    background: 'white',
    text: 'black',
    button: '#007BFF',
    buttonText: 'white',
  };

  const highContrastColors = {
    background: 'black',
    text: 'white',
    button: '#FFD700',
    buttonText: 'black',
  };

  // Função para alternar entre cores
  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  // Estilos dinâmicos com base na palheta escolhida
  const colors = highContrast ? highContrastColors : normalColors;

  const pageStyle = {
    backgroundColor: colors.background,
    color: colors.text,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s ease, color 0.5s ease'
  };

  const buttonStyle = {
    backgroundColor: colors.button,
    color: colors.buttonText,
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.5s ease'
  };

  return (
    <div style={pageStyle}>
      <button style={buttonStyle} onClick={toggleContrast}>
        Mudar para {highContrast ? 'Cores Normais' : 'Alto Contraste'}
      </button>
    </div>
  );
};

export default AltoContraste;

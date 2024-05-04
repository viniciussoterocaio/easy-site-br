import React, { useState, useEffect } from 'react';

function TextoAnimado() {
  const [texto, setTexto] = useState('');
  const [index, setIndex] = useState(0);

  const frase = 'EASY SITE BRASIL'; // Sua frase

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < frase.length) {
        setTexto((prevTexto) => prevTexto + frase[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setTexto('');
          setIndex(0);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [texto, index]);

  return (
    <p id = "animation-text">{texto}</p>
  );
}

export default TextoAnimado;
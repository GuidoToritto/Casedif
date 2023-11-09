import React, { useEffect } from 'react';

const ScrollBoxes = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const checkBoxes = () => {
      const triggerBottom = window.innerHeight / 5 * 4;

      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', checkBoxes);
    checkBoxes(); // Llamar a la función al montar el componente

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []); // Asegurarse de que solo se ejecute una vez al montar el componente
};

export default ScrollBoxes;

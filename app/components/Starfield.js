"use client"; // Esta directiva es crucial para Next.js para indicar que es un Client Component

import React, { useEffect } from 'react';

const Starfield = () => {
  useEffect(() => {
    const starfieldContainer = document.getElementById('starfield-container');
    const numberOfStars = 1200; // Puedes ajustar este número para más o menos estrellas

    // Limpiar estrellas existentes si el componente se renderiza de nuevo
    // Esto es útil si el componente se monta y desmonta varias veces
    starfieldContainer.innerHTML = '';

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      // Eliminadas las clases de Tailwind CSS. Ahora las propiedades se definen en el CSS.
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 0.5}px`; // Tamaño variado entre 0.5px y 2.5px
      star.style.height = `${Math.random() * 2 + 0.5}px`;
      star.style.animationDelay = `${Math.random() * 7}s`; // Retraso de animación variado
      star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Duración de animación variada
      starfieldContainer.appendChild(star);
    }
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="starfield-container">
      {/* Contenedor donde se inyectarán las estrellas dinámicamente */}
      <div className="starfield" id="starfield-container"></div>
      <style>
        {`
        .starfield-container {
            position: fixed; /* Usar fixed para que ocupe toda la ventana y no se desplace con el scroll */
            top: 0;
            left: 0;
            width: 100vw; /* Ocupa todo el ancho de la ventana visible */
            height: 100vh; /* Ocupa toda la altura de la ventana visible */
            background-color: #000000ff; /* Fondo muy oscuro para que las estrellas destaquen */
            overflow: hidden; /* Oculta cualquier estrella que se salga de los límites */
            z-index: -1; /* Asegura que esté detrás de todo el contenido de la página */
        }

        .starfield {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            pointer-events: none; /* Asegura que el fondo no interfiera con los eventos de clic/mouse */
        }

        .star {
            position: absolute; /* Añadido para reemplazar 'absolute' de Tailwind */
            background-color: white; /* Añadido para reemplazar 'bg-white' de Tailwind */
            border-radius: 50%; /* Añadido para reemplazar 'rounded-full' de Tailwind */
            
            /* La opacidad inicial es 0 y es controlada por la animación 'twinkle' */
            animation: twinkle var(--animation-duration, 5s) infinite ease-in-out alternate; /* Animación de parpadeo */
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.08); /* Sutil brillo alrededor de la estrella */
        }

        @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); } /* Empieza invisible y pequeña */
            50% { opacity: 1; transform: scale(1); } /* Se vuelve visible y de tamaño normal */
            100% { opacity: 0; transform: scale(0.5); } /* Vuelve a ser invisible y pequeña */
        }

        /* Ajustes responsivos para el tamaño de las estrellas en pantallas pequeñas */
        @media (max-width: 768px) {
            .star {
                width: 1px; /* Estrellas más pequeñas para dispositivos móviles */
                height: 1px;
            }
        }
        `}
      </style>
    </div>
  );
};

export default Starfield;

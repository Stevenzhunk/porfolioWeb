import React from 'react';
import Ray3 from '../img/3ray.png';
import Movietrailer from '../img/movietrailer.png';
import smartstore from '../img/smartstore.png';
import temperature from '../img/temperature.png';
import burgerApp from '../img/Burger-Moon.png';
import funkoAPP from '../img/funkoshop.png';
import CardProyect from './CardProyect';

const Projects = () => {
  const proyectos = [
    {
      icon: burgerApp,
      iconAlt: 'BurgerAPP',
      linkUrl: 'https://mynextjsfood.vercel.app/',
      gitUrl: 'https://github.com/Stevenzhunk/mynextjsfood',
      desc: 'Aplicacion de comida con administrador de usuarios, productos, ordenes, carrito de compra y pasarela de pago',
      title: 'Burger APP',
    },
    {
      icon: funkoAPP,
      iconAlt: 'funkoshop',
      linkUrl: 'https://fullstackproject-backend.vercel.app/home',
      gitUrl: 'https://github.com/Stevenzhunk/fullstackproject-backend',
      desc: 'Tienda de Funkos FullStack, login con apartado admin, edicion de productos, paginacion y carrito de compras demo',
      title: 'funkoshop',
    },
    {
      icon: temperature,
      iconAlt: 'APP temperatura',
      linkUrl: 'https://my-weather-app-blush.vercel.app/',
      gitUrl: 'https://github.com/Stevenzhunk/my-weather-app',
      desc: 'Humedad, velocidad de viento, máxima, mínima temperatura y las temperaturas de las próximas horas.',
      title: 'APP temperatura',
    },
    {
      icon: smartstore,
      iconAlt: 'SmartStore',
      linkUrl: 'https://myshoppingcartsmartstore.s3.amazonaws.com/index.html',
      gitUrl: 'https://github.com/Stevenzhunk/MyShoppingCart',
      desc: 'Demo Carrito de Compras con detalle de productos, con funciones de agregar, eliminar elementos, ver el total en el carrito, con versión móvil.',
      title: 'SmartStoreCart',
    },
    {
      icon: Movietrailer,
      iconAlt: 'MovieTrailer',
      linkUrl: 'https://stevenzhunk-react.s3.amazonaws.com/index.html',
      gitUrl: 'https://github.com/Stevenzhunk/webTrailer',
      desc: 'Aplicación que muestra 20 películas en tendencia, con su descripción',
      title: 'Aplicación Trailers',
    },
    {
      icon: Ray3,
      iconAlt: 'TicTacToe',
      linkUrl: 'https://3-ray-game-tic-tac-64aux79jn-stevenzhunk.vercel.app/',
      gitUrl: 'https://github.com/Stevenzhunk/3RayGame',
      desc: 'Juego clasico de hacer una linea jvsj adaptado al explorador de internet',
      title: 'TicTacToe',
    },
  ];

  return (
    <div>
      <section className="bg-white dark:bg-futurePurple" id="proyects">
        <div className="container px-6 md:px-16 py-10 mx-auto lg:py-20">
          <h1 className="text-3xl font-semibold capitalize lg:text-4xl  dark:text-black flex justify-center text-fullBlack dark:text-white">
            Últimos Proyectos
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {proyectos.map((proyecto, index) => (
              <CardProyect
                key={index}
                icon={proyecto.icon}
                iconAlt={proyecto.iconAlt}
                linkUrl={proyecto.linkUrl}
                gitUrl={proyecto.gitUrl}
                desc={proyecto.desc}
                title={proyecto.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

import React from 'react';
import dev from '../Favicon/dev.png';
import frames from '../Favicon/frames.png';
import scrum from '../Favicon/scrum.png';
import diseño from '../Favicon/diseño.png';
import actualizacion from '../Favicon/actualizacion.png';
import { useDarkMode } from '../provider/Darkmode';

const About = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="bg-white dark:bg-softdark">
      <div className="px-8 py-10 mx-auto sm:max-w-full md:max-w-4xl md:py-16  md:px-24 lg:px-32 lg:py-32">
        <section id="Aboutme">
          <div
            className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2 ml-auto mr-auto"
            data-aos="fade-up"
          >
            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto flex justify-center">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                ></svg>
                <span className="relative text-fullBlack dark:text-white flex justify-center pb-4 md:pb-0">
                  Acerca de mi
                </span>
              </span>{' '}
            </h2>
            <p className="text-base text-center font-light text-fullBlack dark:text-white md:text-base pb-10 lg:pb-6 mx-auto ">
              Hola, soy Luis Becerra, un Desarrollador Web Full Stack
              especializado en el stack MERN y Testing QA. He sentido una
              profunda pasión por el mundo de la tecnología, lo que me llevó a
              explorar diferentes disciplinas.
            </p>
            <p className="text-base  text-center font-light text-fullBlack dark:text-white md:text-base pb-8 lg:pb-6 mx-auto">
              He construido proyectos de comercio electrónico (E-commerce)
              utilizando diversas herramientas como CMS, frameworks modernos y
              estrategias avanzadas de marketing digital. Además, he
              desarrollado soluciones de ventas en línea y administrativas,
              adaptándome a las necesidades de clientes con distintos contextos
              y lenguajes.
            </p>
            <p className="text-base  text-center font-light text-fullBlack dark:text-white md:text-base pb-8 lg:pb-0 mx-auto">
              Gracias a mi experiencia práctica y multidisciplinaria, ofrezco un
              enfoque integral que combina desarrollo técnico, diseño creativo y
              estrategias de mercado, ayudando a empresas y emprendedores a
              destacar en el competitivo mundo digital.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5 row-gap-5 mb-10 sm:grid-cols-3 lg:grid-cols-5"
            data-aos="fade-up"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 md:mb-0 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <img src={dev} className="xl:w-16" />
              </div>
              <h6 className="mb-2 font-light leading-5 text-fullBlack dark:text-white">
                Amante de la Tecnología Electrónica e Informática
              </h6>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 md:mb-0 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <img src={frames} className="xl:w-16" />
              </div>
              <h6 className="mb-2 font-light leading-5 text-fullBlack dark:text-white">
                Usando ultima tecnología de frameworks
              </h6>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 md:mb-0 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <img src={scrum} className="xl:w-16" />
              </div>
              <h6 className="mb-2 font-light leading-5 text-fullBlack dark:text-white">
                Uso de metodologías SCRUM y SPRINT
              </h6>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 md:mb-0 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <img src={diseño} className="xl:w-16" />
              </div>
              <h6 className="mb-2 font-light leading-5 text-fullBlack dark:text-white">
                Diversos programas de Diseño gráfico
              </h6>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 md:mb-0 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <img src={actualizacion} className="xl:w-16" />
              </div>
              <h6 className="mb-2 font-light leading-5 text-fullBlack dark:text-white">
                Siempre en constante capacitación
              </h6>
            </div>
          </div>
        </section>
        <div className="scroll-bottom">
          <svg
            className="home__svg animate__animated animate__fadeInRight"
            width="20"
            height="236"
            viewBox="0 0 30 236"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Primer path (de la flecha) */}
            <path
              d="M18.06 153.12C20.14 153.12 22.14 154.82 22.14 157.92C22.14 160.7 20.62 162.84 18.16 162.84L18.16 160.4C19.3 160.3 20.22 159.5 20.22 157.92C20.22 156.32 19.36 155.42 18.18 155.42C14.82 155.42 17 162.8 11.88 162.8C9.44001 162.8 7.92001 160.86 7.92001 158.02C7.92001 155.36 9.32001 153.48 11.7 153.28L11.7 155.8C10.76 155.88 9.90001 156.7 9.86001 158.14C9.82001 159.46 10.46 160.48 11.8 160.48C14.94 160.48 12.98 153.12 18.06 153.12ZM15.02 151.19C10.86 151.19 7.92001 148.01 7.92001 144.09C7.92001 141.19 9.38001 138.69 12.1 137.63L12.1 140.37C10.62 141.11 9.92001 142.43 9.92001 144.09C9.92001 146.85 11.88 148.85 15.02 148.85C18.16 148.85 20.14 146.85 20.14 144.09C20.14 142.43 19.44 141.11 17.96 140.37L17.96 137.63C20.68 138.69 22.12 141.19 22.12 144.09C22.12 148.01 19.2 151.19 15.02 151.19ZM12.26 127.581C10.86 127.581 9.96001 128.381 9.96001 130.161L9.96001 132.681L14.62 132.681L14.62 130.161C14.62 128.381 13.64 127.581 12.26 127.581ZM8.10001 134.961L8.10001 130.161C8.10001 126.861 10 125.241 12.26 125.241C13.9 125.241 15.66 126.121 16.24 128.461L22 125.021L22 127.741L16.44 130.941L16.44 132.681L22 132.681L22 134.961L8.10001 134.961ZM15.02 108.884C19.2 108.884 22.14 112.024 22.14 115.984C22.14 119.904 19.2 123.084 15.02 123.084C10.86 123.084 7.92001 119.904 7.92001 115.984C7.92001 112.024 10.86 108.884 15.02 108.884ZM15.02 120.744C18.16 120.744 20.16 118.744 20.16 115.984C20.16 113.224 18.16 111.224 15.02 111.224C11.88 111.224 9.92001 113.224 9.92001 115.984C9.92001 118.744 11.88 120.744 15.02 120.744ZM8.10001 106.641L8.10001 104.361L20.16 104.361L20.16 99.6606L22 99.6606L22 106.641L8.10001 106.641ZM8.10001 97.7539L8.10001 95.4739L20.16 95.4739L20.16 90.7739L22 90.7739L22 97.7539L8.10001 97.7539ZM18.02 75.8319C16.64 75.8319 15.8 76.8719 15.8 78.3919L15.8 81.3919L20.14 81.3919L20.14 78.3119C20.14 76.7719 19.36 75.8319 18.02 75.8319ZM11.96 76.1919C10.7 76.1919 9.96001 77.0919 9.96001 78.5719L9.96001 81.3919L13.94 81.3919L13.94 78.5719C13.94 77.0919 13.24 76.1919 11.96 76.1919ZM18.26 73.5519C20.38 73.5519 22 75.2719 22 78.1119L22 83.6719L8.10001 83.6719L8.10001 78.3719C8.10001 75.4319 9.72001 73.8719 11.68 73.8719C13.36 73.8719 14.38 74.8919 14.86 76.2319C15.12 74.7519 16.6 73.5519 18.26 73.5519ZM15.02 57.6342C19.2 57.6342 22.14 60.7742 22.14 64.7342C22.14 68.6542 19.2 71.8342 15.02 71.8342C10.86 71.8342 7.92001 68.6542 7.92001 64.7342C7.92001 60.7742 10.86 57.6342 15.02 57.6342ZM15.02 69.4942C18.16 69.4942 20.16 67.4942 20.16 64.7342C20.16 61.9742 18.16 59.9742 15.02 59.9742C11.88 59.9742 9.92001 61.9742 9.92001 64.7342C9.92001 67.4942 11.88 69.4942 15.02 69.4942ZM9.96001 56.1106L8.10001 56.1106L8.10001 46.4106L9.96001 46.4106L9.96001 50.1106L22 50.1106L22 52.3906L9.96001 52.3906L9.96001 56.1106ZM9.96001 44.8216L8.10001 44.8216L8.10001 35.1216L9.96001 35.1216L9.96001 38.8216L22 38.8216L22 41.1016L9.96001 41.1016L9.96001 44.8216ZM15.02 19.3725C19.2 19.3725 22.14 22.5125 22.14 26.4725C22.14 30.3925 19.2 33.5725 15.02 33.5725C10.86 33.5725 7.92001 30.3925 7.92001 26.4725C7.92001 22.5125 10.86 19.3725 15.02 19.3725ZM15.02 31.2325C18.16 31.2325 20.16 29.2325 20.16 26.4725C20.16 23.7125 18.16 21.7125 15.02 21.7125C11.88 21.7125 9.92001 23.7125 9.92001 26.4725C9.92001 29.2325 11.88 31.2325 15.02 31.2325ZM22 17.1289L8.10001 17.1289L8.10001 14.6689L19 9.7889L8.10001 4.9289L8.10001 2.48891L22 2.4889L22 4.7689L12.48 4.76891L22 9.0089L22 10.5889L12.48 14.8489L22 14.8489L22 17.1289Z"
              className={darkMode ? 'fill-white' : 'fill-fullBlack'} // Cambia el color del primer path
            />
            {/* Segundo path (de la flecha morada) */}
            <path
              d="M13.9393 235.061C14.5251 235.646 15.4749 235.646 16.0607 235.061L25.6066 225.515C26.1924 224.929 26.1924 223.979 25.6066 223.393C25.0208 222.808 24.0711 222.808 23.4853 223.393L15 231.879L6.51472 223.393C5.92893 222.808 4.97918 222.808 4.3934 223.393C3.80761 223.979 3.80761 224.929 4.3934 225.515L13.9393 235.061ZM13.5 174L13.5 234L16.5 234L16.5 174L13.5 174Z"
              className="fill-purpleOpc" // Cambia el color del segundo path
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;

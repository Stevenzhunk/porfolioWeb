import React from 'react'
import protoboard from '../Favicon/protoboard.png'
import dev from '../Favicon/dev.png'
import frames from '../Favicon/frames.png'
import scrum from '../Favicon/scrum.png'
import diseño from '../Favicon/diseño.png'
import actualizacion from '../Favicon/actualizacion.png'


const About = () => {
  return (
    <div className="px-8 py-16 mx-auto sm:max-w-full md:max-w-full  md:px-24 lg:px-40 lg:py-32 bg-purpleOpc" >
      <section id="Aboutme">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ml-auto mr-auto" data-aos="fade-up" >
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto flex justify-center">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
            </svg>
            <span className="relative text-white flex justify-center pb-10">Acerca de mi</span>
          </span>{' '}
        </h2>
        <p className="text-base font-light text-white md:text-lg pb-10">
        Desde muy joven, descubrí mi pasión por la Tecnología y el Diseño, lo que te llevó a estudiar Ing. Electrónica y Distintos cursos de Diseño gráfico, y paulatinamente especializarme en el Diseño Web. 
        </p>
        <p className="text-base font-light text-white md:text-lg pb-16">He sido capaz de diseñar sitios web de manera efectiva y eficiente, utilizando herramientas como HTML ,CSS y JavaScript para crear interfaces de usuario atractivas y funcionales, vía remoto. A lo largo de los años, tambien he trabajado en diversos proyectos de comercio electrónico (eCommerce), administración, y ventas electrónicas, adquiriendo una amplia experiencia en el mundo digital. </p>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6" data-aos="fade-up">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={protoboard}/>
          </div>
          <h6 className="mb-2 font-light leading-5 text-white">Amante y estudiante de Electrónica</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={dev}/>
          </div>
          <h6 className="mb-2 font-light leading-5 text-white">Amante de la programación</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={frames}/>
          </div>
          <h6 className="mb-2 font-light leading-5 text-white" >Usando ultima tecnología de frameworks</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img src={scrum}/>
          </div>
          <h6 className="mb-2 font-light leading-5 text-white">Diversas metodologías SCRUM</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img src={diseño}/>
          </div>
          <h6 className="mb-2 font-light leading-5 text-white">Conocimientos en diversos programas de Diseño gráfico</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img src={actualizacion}/>
          </div>
          <h6 className="mb-2 font-light leading-5 text-white">Siempre en constante actualización</h6>
        </div>
      </div>
     </section>
    </div>
  );
}

export default About;
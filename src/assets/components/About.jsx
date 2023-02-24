import React from 'react'
import protoboard from '../Favicon/protoboard.png'
import dev from '../Favicon/dev.png'
import frames from '../Favicon/frames.png'
import scrum from '../Favicon/scrum.png'
import diseño from '../Favicon/diseño.png'
import actualizacion from '../Favicon/actualizacion.png'


const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-full md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-purpleOpc">
      <section id="Aboutme">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ml-auto mr-auto">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto flex justify-center">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
            </svg>
            <span className="relative text-white flex justify-center">Acerca de mi</span>
          </span>{' '}
        </h2>
        <p className="text-base text-white md:text-lg">
        Años de experiencia  entusiasmo en el mundo de la tecnología y la programación, comenzando en Ingeniería Electrónica, pasando por Diseño Gráfico hasta Diseño Web, manejando diferentes tecnologías.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={protoboard}/>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Amante y estudiante de Electronica</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={dev}/>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Amante de la programacion</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <img src={frames}/>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white" >Usando ultima tecnologia de frameworks</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img src={scrum}/>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Diversas metodologias scrum</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img src={diseño}/>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Conocimientos en diversos programas de Diseño grafico</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img src={actualizacion}/>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Siempre en constante actualización</h6>
        </div>
      </div>
     </section>
    </div>
  );
}

export default About;
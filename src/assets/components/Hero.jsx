import React from 'react'
import Imagen from '../img/hero.png'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <>
    <div className="relative px-6 lg:px-8 bg-darkpurple">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-32 sm:pb-28">
        <div className="md:flex md:justify-center "> {/* controlador centrador de texto e imagen en hero]*/}
          
          {/*Texto Hero*/}
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-white">Hola soy Luis Becerra</h1>
            <div className="mt-6 text-xl leading-8 sm:text-center text-white">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                deleteSpeed:1000,
              }}
              onInit={(typewriter) => {
              typewriter.typeString('Diseñador Web')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
              typewriter.typeString('Diseñador Front-End')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();  
            }}
            />
            </div>
            <p className="text-lg leading-8 text-graysoft sm:text-center m-0">Amante de la tecnologia e informatica</p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
            <a href="#proyects" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-purpleOpc hover:bg-white hover:text-purpleOpc">
                Mis Trabajos
                <span className="text-gray-400" aria-hidden="true">&rarr;</span>
              </a>
             
              <a href="https://api.whatsapp.com/send?phone=541127253329" target="_blank" className="inline-block px-4 py-1.5 text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-darkpurple flex">
                Decir Hola 📲  
                <span className="text-gray-400" aria-hidden="true">&rarr;</span>
                <div className="flex items-center justify-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
              </a>
            </div>
          </div>
          
          {/*  <div className="md:mt-0 mt-12 sm:w-full w-6/12">*/}
          <div className="pt-10 md:pt-0">
            <img className="m-auto block pt-10 md:pt-0  "src={Imagen}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
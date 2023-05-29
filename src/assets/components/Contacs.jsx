import React from 'react'
import { UilLinkedin,UilWhatsapp, UilImport } from '@iconscout/react-unicons';

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};


const Contacs = () => {
  return (
  <div>
    <div className="px-4 py-16 mx-auto sm:max-w-full sm:px-24 sm:py-24 md:max-w-full  md:px-24 lg:px-8 lg:pt-12 lg:pb-1 2 bg-darkpurple">
      <section id="contacme">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div >
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto justify-center grid">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
            </svg>
            <span className="relative text-white md:grid md:justify-center md:my-4">Trabajemos Juntos</span>
          </span>{' '}
        </h2>
        </div>
          <div className="">
            <div className="grid justify-center md:justify-center md:flex  ">
            <a  href="https://api.whatsapp.com/send?phone=541127253329" target="_blank"
                className="bg-purpleOpc rounded-md text-white font-bold flex space-x-1.5 justify-content: space-evenly; sm:justify-content: space-evenly ml-4 mr-4 items-center justify-center ">
                
                <UilWhatsapp 
                size="3rem"
                className="text-white"
                />
              </a>
              <a  href="https://www.linkedin.com/in/luis-enrique-becerra-gonzalez-a80201266/" target="_blank"
                className="bg-purpleOpc rounded-md text-white font-bold flex space-x-1.5 justify-content: space-evenly; sm:justify-content: space-evenly ml-4 mr-4 items-center justify-center md:space-y-8 md:mt-0 mt-8">
                
                <UilLinkedin 
                size="3rem"
                className="text-white"
                />
              </a>
              
              
            </div>
          </div>
      </div>
      
      <div className="flex justify-center ">
        <div className="mt-4 flex gap-x-4 text-center sm:text-left md:justify-start justify-center">
              <a href="https://stevenzhunkporfolio.s3.amazonaws.com/LuisBecerraresdev.pdf"  
                 target='_blank'
                 className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-purpleOpc hover:bg-white hover:text-purpleOpc md:text-sx">
                  Descargar Resumen
                </a>
                
        </div>
      </div>
     </section>
      <div className="flex justify-center py-12 ">
          <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <button onClick={()=>scrollToTop()} >
            <svg className="w-6 h-6 text-violet-500 rotate-180" fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            </button>
          </div>
      </div>
      
    </div>
  </div>
  )
}

export default Contacs;
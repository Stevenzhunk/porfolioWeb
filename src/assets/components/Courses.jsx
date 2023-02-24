import React from 'react'

const Courses = () => {
  return ( 
    <div className="bg-graymetalsoft ">
        <h1 class="text-3xl font-semibold capitalize lg:text-4xl  dark:text-white flex justify-center p-8">Educación</h1>
        <div className="container max-w-full">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            {/* left --> */ } 
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">JavaScript Algorithms and Data Structures</h3>
                <p className="leading-tight text-justify">
                freeCodeCampfreeCodeCamp 300hrs | Expedición: feb. 2023
                <a href="https://www.freecodecamp.org/certification/fcc568d7948-29f7-4af6-b3f7-02f2223a215f/javascript-algorithms-and-data-structures" target="_blank"><p className="underline">Ver Certificado</p></a>
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purpleOpc shadow"
                ></div>
              </div>
            </div>
            {/* right --> */ } 
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purpleOpc shadow"
                ></div>
              </div>
              <div
                className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Ruby, Javascript y Gobstones</h3>
                <p className="leading-tight text-justify">
                Argentina ProgramaArgentina Programa (Ministerio de Economía y la Cámara Empresarial de Software y Servicios Informáticos (CESSI)) | Expedición: may. 2022
                <a href="https://stevenzhunkporfolio.s3.amazonaws.com/IMG_20230223_192759_225.jpg" target="_blank"><p className="underline">Ver Certificado</p></a>
                </p>
              </div>
            </div>
            {/* left --> */ } 
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Advanced React JS</h3>
                <p className="leading-tight text-justify">
                  220 hrs Cursos online
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purpleOpc shadow"
                ></div>
              </div>
            </div>
            
            {/*<-- right -->*/}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purpleOpc shadow"
                ></div>
              </div>
              <div
                className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1"> Cursos presenciales y remotos </h3>
                <p className="leading-tight text-justify">
                Programación Web Basica (CSS,HTML y Javascript), Metodologias SCRUM, Edición de imagenes Photoshop, paquete office | 2012-2015
                </p>
              </div>
            </div>

            {/* left --> */ } 
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1"> Ingeniería Electronica</h3>
                <p className="leading-tight text-justify">
                 Unexpo, Venezuela | abr. 2012 - jun. 2017
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purpleOpc shadow"
                ></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Courses
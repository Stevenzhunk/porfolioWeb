import React from 'react'
import Ray3 from '../img/3ray.png'
import Movietrailer from '../img/movietrailer.png'
const Projects = () => {
  return (
    <div>
      <section class="bg-yellowOpc dark:bg-gray-900" id="proyects">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold capitalize lg:text-4xl  dark:text-black flex justify-center">Ultimos Projectos</h1>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              <div class="lg:flex">
                  <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={Movietrailer} alt=""/>

                  <div class="flex flex-col justify-between py-6 lg:mx-6">
                      <a href="https://stevenzhunk-react.s3.amazonaws.com/index.html" target="_blank" class="text-xl font-semibold text-gray-800 hover:underline dark:text-dark ">
                          Aplicación trailers de ultimas peliculas en tendencia
                      </a>
                      
                      <span class="text-sm text-gray-500 dark:text-gray-300">Febrero 2023</span>
                  </div>
              </div>

              <div class="lg:flex">
                  <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={Ray3} alt=""/>

                  <div class="flex flex-col justify-between py-6 lg:mx-6">
                      <a href="https://stevenz-react-3enlinea.s3.amazonaws.com/index.html"  target="_blank" class="text-xl font-semibold text-gray-800 hover:underline dark:text-dark ">
                          Aplicación jugar el 3 en linea 
                      </a>
                      <span class="text-sm text-gray-500 dark:text-gray-300">Febrero 2023</span>
                  </div>
              </div>
          </div>
        </div>
      </section>   

    </div>
  )
}

export default Projects
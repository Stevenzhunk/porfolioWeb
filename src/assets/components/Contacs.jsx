import React from 'react'
import whatsapp from '../Favicon/whatsapp.png'
import spinvid from '../Favicon/spinvid.png'

const Contacs = () => {
  return (
  <div>
    <div className="px-4 py-16 mx-auto sm:max-w-full sm:px-24 sm:py-24 md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-darkpurple">
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
            <div className="grid justify-center md:justify-start md:flex divide-x divide-dashed ">
            <a  href="https://api.whatsapp.com/send?phone=541127253329" target="_blank"
                className="bg-purpleOpc rounded-xl text-white font-bold flex space-x-1.5 justify-content: space-evenly; sm:justify-content: space-evenly ml-4 mr-4 items-center justify-center">
                Send whatsapp
                <img className="w-12" src={whatsapp}/>
              </a>
              <p className=" text-white mt-8 md:space-y-8 md:mt-0">
              Numero: (+54) 91127253329, Argentina
              </p>
              
              <p className=" text-white mt-8 md:space-y-8 md:mt-0">
                Email: stvzbernelli@gmail.com 
              </p>
            </div>
          </div>
      </div>
     </section>
    </div>
  </div>
  )
}

export default Contacs
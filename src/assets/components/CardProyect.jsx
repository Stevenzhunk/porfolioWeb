import { UilGithub, UilGlobe } from '@iconscout/react-unicons';

const CardProyect = ({ icon, iconAlt, linkUrl, gitUrl, desc, title }) => {
  return (
    <div className="lg:flex" data-aos="zoom-in">
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-72 hover:scale-125"
        src={icon}
        alt={iconAlt}
      />

      <div className="flex flex-col  py-6 lg:mx-6 text-fullBlack dark:text-white">
        <a
          href={linkUrl}
          target="_blank"
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark "
        >
          {title}
        </a>
        <p className="py-8 font-light text-sm">{desc}</p>
        <div className="flex ">
          {/* Contenedor Iconos Git y Deploy */}
          <a
            href={gitUrl}
            target="_blank"
            className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0"
          >
            <UilGithub
              size="2rem"
              className="text-white mx-auto hover:text-purpleOpc flex w-full"
            />
          </a>
          <a
            href={linkUrl}
            target="_blank"
            className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0 ml-2"
          >
            <UilGlobe
              size="2rem"
              className="text-white mx-auto hover:text-purpleOpc flex w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProyect;

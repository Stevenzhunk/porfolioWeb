const CoursesHeader = ({ title, urlLink, time, urlCertificate, disabled }) => {
  return (
    <li data-aos="fade-right">
      <div className="flex-start flex items-center pt-8">
        <div className="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-futurePurple dark:bg-softPurpleGum"></div>
        <h4 className="-mt-2 text-xl font-light text-fullBlack dark:text-white">
          {title}
        </h4>
      </div>
      <div className="ml-6 mb-6 pb-6">
        <a
          href={urlLink}
          target="_blank"
          className="text-sm text-futurePurple dark:text-graysoft ease-in-out hover:text-futurePurple-600 dark:text-futurePurple-400 dark:hover:text-futurePurple-500 dark:focus:text-futurePurple-500"
        >
          {time}
        </a>
        <p className="mt-2 mb-4 text-neutral-600 dark:text-neutral-300"></p>
        <a
          href={urlCertificate}
          target="_blank"
          type="button"
          className={`${disabled}inline-block rounded bg-futurePurple dark:bg-purpleOpc px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-futurePurple-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-futurePurple-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-futurePurple-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Ver Certificado
        </a>
      </div>
    </li>
  );
};

export default CoursesHeader;

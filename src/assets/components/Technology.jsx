import nodeJsImg from '../img/nodejsogo.svg';
import tailwindLogo from '../img/tailwindcsslogo.svg';
import nextJsSvg from '../img/nextjs.svg';
import mySqlSvg from '../img/mysql.svg';
import photoshopSVG from '../img/adobe-photoshop.svg';
const Technology = () => {
  return (
    <div className="bg-yellowOpc dark:bg-metal py-20 sm:pb-32 lg:flex">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-gray-1000 sm:text-4xl md:mx-auto justify-center grid">
          <span className="relative text-fullBlack dark:text-white md:grid md:justify-center md:my-4">
            Stacks y Tecnologías
          </span>
        </h2>
        <div
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-xl lg:grid-cols-6 "
          data-aos="zoom-in"
        >
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="100"
              height="100"
            />{' '}
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="100"
              height="100"
            />
          </a>{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://www.framer.com/" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
              alt="framer"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {' '}
            <img src={nodeJsImg} alt="nodejs" width="100" height="100" />{' '}
          </a>{' '}
          <a
            href="https://www.photoshop.com/en"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <img
              src={photoshopSVG}
              alt="photoshop"
              width="80"
              height="80"
            />{' '}
          </a>{' '}
          <a href="https://postman.com" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
            {' '}
            <img
              src={tailwindLogo}
              alt="postman"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {' '}
            <img src={nextJsSvg} alt="Next.js" width="100" height="100" />{' '}
          </a>{' '}
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            {' '}
            <img src={mySqlSvg} alt="MySQL" width="100" height="100" />{' '}
          </a>{' '}
          <a href="https://stripe.com/" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg"
              alt="Stripe"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
          <a href="https://aws.amazon.com/s3/" target="_blank" rel="noreferrer">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
              alt="AWS S3"
              width="100"
              height="100"
            />{' '}
          </a>{' '}
        </div>
      </div>
    </div>
  );
};

export default Technology;

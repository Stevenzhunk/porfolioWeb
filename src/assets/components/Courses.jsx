import CoursesHeader from './CoursesHeader';
const Courses = () => {
  const cursos = [
    {
      title: 'Testing QA',
      time: 'Agencia de Habilidades para el Futuro | Marzo. 2023 - Jun. 2025 ',
      urlLink:
        'https://drive.google.com/file/d/1IQFIUAXhNmIMC7WfaF6lR9Xj6g4ZSUGx/view',
      urlCertificate:
        'https://drive.google.com/file/d/1IQFIUAXhNmIMC7WfaF6lR9Xj6g4ZSUGx/view',
    },
    {
      title: 'Codo a Codo 4.0 Programación FullStack Node, Express,MysQL, EJS',
      time: 'Ministerio de Ciencia, Tecnología e Innovación de la Nación | Ago. 2023 - Mar. 2024 ',
      urlLink:
        'https://drive.google.com/file/d/1d15Q0xc2-s5CNxUwpV0XiPgiWydHMrvC/view',
      urlCertificate:
        'https://drive.google.com/file/d/1d15Q0xc2-s5CNxUwpV0XiPgiWydHMrvC/view',
    },
    {
      title: 'Full Stack Open (Full Stack MERN - Remoto Finlandia)',
      urlLink:
        'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/ab8bdb129d0c2e233dcebc2115bd602c',
      time: 'Universidad de Helsinki, Finlandia | Ene. 2023 - Dic. 2023',
      urlCertificate:
        'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/ab8bdb129d0c2e233dcebc2115bd602c',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      urlLink:
        'https://www.freecodecamp.org/certification/fcc568d7948-29f7-4af6-b3f7-02f2223a215f/javascript-algorithms-and-data-structures',
      time: 'FreeCodeCamp 300hrs | Expedición: feb. 2023',
      urlCertificate:
        'https://www.freecodecamp.org/certification/fcc568d7948-29f7-4af6-b3f7-02f2223a215f/javascript-algorithms-and-data-structures',
    },
    {
      title: 'Ruby, Javascript y Gobstones',
      urlLink:
        'https://stevenzhunkporfolio.s3.amazonaws.com/Certificado-Argentina.jpg',
      time: 'Argentina Programa (Ministerio de Economía y la Cámara Empresarial de Software y Servicios Informáticos (CESSI)) Expedición: May. 2022',
      urlCertificate:
        'https://stevenzhunkporfolio.s3.amazonaws.com/Certificado-Argentina.jpg',
    },
    {
      title: 'Advanced React JS',
      time: '350 hrs Cursos online',
      disabled: 'hidden ',
    },
    {
      title:
        'Cursos presenciales y remotos de Photoshop, HTML, CSS3, JavaScript, Trello y GitHub',
      time: '',
      disabled: 'hidden ',
    },
    {
      title: 'Ingeniería Electrónica',
      time: 'Unexpo, Venezuela | Abr. 2012 - Jun. 2017',
      disabled: 'hidden ',
    },
  ];

  return (
    <div className="px-8 py-8 md:py-10 md:px-32 lg:py-20 bg-silverPlate dark:bg-graymetalsoft">
      <p className="max-w-lg mb-6 text-3xl  font-bold leading-none tracking-tight text-fullBlack dark:text-graysoft sm:text-4xl md:mx-auto flex justify-center">
        Formación y Certificados
      </p>
      <ol className=" border-l-2 border-futurePurple dark:border-purpleOpc ">
        {cursos.map((curso, index) => (
          <li data-aos="fade-right" key={index}>
            <CoursesHeader
              title={curso.title}
              urlLink={curso.urlLink}
              time={curso.time}
              urlCertificate={curso.urlCertificate}
              disabled={curso.disabled}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Courses;

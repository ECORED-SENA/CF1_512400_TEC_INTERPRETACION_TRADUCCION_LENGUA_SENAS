export default {
  global: {
    componenteFormativo: 'Fundamentos del servicio de interpretación',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos básicos para entender los procedimientos logísticos y los protocolos necesarios para prestar de manera óptima el servicio de traducción e interpretación del lenguaje de señas, a partir de las necesidades y los requerimientos del entorno.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Logística del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Etapas o fases',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Criterios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Costos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Objetivos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Medios y servicios',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Planificación y producción',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Logística del servicio de interpretación',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atención al usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis de los destinatarios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Etiqueta y protocolo en el servicio de interpretación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fundamentación conceptual de comunidad y cultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Grupos minoritarios ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comunidad y cultura de las personas sordas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características de las personas sordas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inclusión y discapacidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '¿Qué permite la inclusión?',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Discapacidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modelos de discapacidad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Enfoques en la discapacidad',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Trabajo en equipo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Aspectos administrativos y contratación (legislación, parafiscales)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Contratación (legislación, parafiscales)',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Perfiles y funciones del intérprete',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Perfiles y funciones del intérprete',
      referencia:
        'Fenascol. (2017). <em>Código de Ética del Intérprete. Calidad.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7FY8gXy_jww',
    },
    {
      tema: 'Perfiles y funciones del intérprete',
      referencia:
        'Insor. (2017). <em>Reglamentación reconocimiento intérpretes lengua de señas colombiana</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-zCQNv_PM3M',
    },
  ],
  glosario: [
    {
      termino: 'Intérprete para sordos',
      significado:
        'personas con amplios conocimientos de la Lengua de Señas Colombiana que puede realizar interpretación simultánea del español hablado en la lengua de señas y viceversa.',
    },
    {
      termino: 'Lengua de señas',
      significado:
        'lengua natural de una comunidad de sordos, la cual forma parte de su patrimonio cultural y es tan rica y compleja en gramática y vocabulario como cualquier lengua oral. ',
    },
    {
      termino: 'Logística',
      significado:
        'red de medios, métodos e infraestructura que garantiza la conservación y calidad de un producto o servicio.',
    },
    {
      termino: 'Planeación',
      significado:
        'organización de un plan a partir de objetivos en común, junto con acciones requeridas para concluir exitosamente.',
    },
    {
      termino: 'Prestación de servicios',
      significado:
        'servicio ofrecido y el servicio percibido en cuanto a calidad, variedad, costo, tiempo de respuesta, disponibilidad, entre otros. ',
    },
    {
      termino: 'Relaciones interpersonales',
      significado:
        'asociaciones o interacciones entre dos o más personas que se dan desde el orden de las emociones, sentimientos, intereses, actividades sociales y culturales; además por formas colaborativas que parten de un proceso comunicativo asertivo.',
    },
    {
      termino: 'Servicio',
      significado:
        'conjunto de actividades o acciones para servir a alguien; además se puede considerar como la acción de dar, prestar apoyo o asistencia a alguien, proviene del latín <em>servitĭum</em>.',
    },
    {
      termino: 'Servicio de interpretación',
      significado:
        'se desarrolla <em>in situ</em>, es decir, en el propio lugar. Por ejemplo, un intérprete se desplaza con su cliente a una institución, eventos, reuniones.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'acciones de un grupo de personas que se dan desde un interés común y con parámetros claros de compromiso y responsabilidad para conseguir el objetivo.',
    },
    {
      termino: 'Traducción',
      significado:
        'consiste en comprender el significado de un texto en un idioma (origen), para producir un texto equivalente, llamado texto meta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Capotori, F. (1977). <em>Study on the rights of persons belonging to ethnic, religious and linguistic minorities.</em> ',
      link: 'https://digitallibrary.un.org/record/701736?ln=es',
    },
    {
      referencia:
        'Congreso de Colombia. (1996). Ley 324 de 1996. Por la cual se crean algunas normas a favor de la población sorda.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=349',
    },
    {
      referencia:
        'Congreso de Colombia. (2005). Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas y se dictan otras disposiciones. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=17283',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2002). Sentencia C-128-02 2002. [MP Eduardo Montealegre Lynett]. En el entendido de que también son intérpretes para sordos aquellas personas que realicen la interpretación simultánea del castellano hablado a otras formas de comunicación de la población sorda, distintas a la Lengua Manual, y viceversa. ',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2002/C-128-02.htm',
    },
    {
      referencia:
        'Cowen, J., Melia, J., DeRosa, R., & Blane, S. (1994). <em>It takes a village</em>. [Se necesita todo un pueblo]. Scholastic.',
    },
    {
      referencia:
        'García, D. (2014). Minorías lingüísticas en Colombia. Acercamiento desde las políticas públicas y los derechos humanos. <em>Cuadernos de Lingüística Hispánica</em> (24), 163-182.',
    },
    {
      referencia:
        'Hamel, E., R. (1995). Derechos lingüísticos como derechos humanos: debates y perspectivas. <em>Alteridades</em> 5(10), 11-23.',
    },
    {
      referencia:
        'Méndez, R. (2010). Figura del intérprete de lengua de signos en educación. <em>Revista Digital para Profesionales de la Enseñanza</em>, (8). ',
      link: 'https://www.feandalucia.ccoo.es/docu/p5sd7181.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante ',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes ',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo ',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas ',
          cargo: 'Activador de recursos en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta',
          centro:
            'Centro de formación en Talento Humano y Salud - Regional Bogotá',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla ',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

export default {
  global: {
    Name: 'Entendiendo mi Mundo',
    Description:
      'El desarrollo sostenible busca satisfacer las necesidades presentes sin comprometer las futuras. La Agenda 2030 establece 17 Objetivos de Desarrollo Sostenible, impulsando acciones éticas en empresas mediante valores, productos responsables y estrategias sostenibles. El enfoque Triple Bottom Line integra impacto social, económico y ambiental. Varias marcas adoptan este modelo, priorizando responsabilidad, equidad y conciencia ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Objetivos de Desarrollo Sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Los 17 Objetivos de Desarrollo Sostenible',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Propósito, valores y principios para construir una marca ética',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Triple Bottom Line</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ejemplos de marcas sostenibles y competitivas',
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
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
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
      tema: 'Objetivos de Desarrollo Sostenible',
      referencia:
        'UNESCO en español. (2017). Los Objetivos de Desarrollo Sostenible - qué son y cómo alcanzarlos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MCKH5xk8X-g&ab_channel=UNESCOenespa%C3%B1ol ',
    },
    {
      tema: 'Los 17 Objetivos de Desarrollo Sostenible',
      referencia: 'Naciones Unidas (2015). Objetivos de Desarrollo Sostenible.',
      tipo: 'Sitio web',
      link:
        'https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/ ',
    },
    {
      tema: 'Triple Bottom Line',
      referencia:
        'HBS Online (2017). What Is the Triple Bottom Line? | Business: Explained [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1-Ct_53XKYY&ab_channel=HBSOnline ',
    },
    {
      tema: 'Ejemplos de marcas sostenibles y competitivas',
      referencia:
        'Bancolombia (2016). Negocios Sostenibles | Bancolombia. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=wk_4sr08lfI&ab_channel=Bancolombia ',
    },
  ],
  glosario: [
    {
      termino: 'Agenda 2030',
      significado:
        'plan de acción global que agrupa los 17 ODS con el fin de alcanzar el desarrollo sostenible en sus dimensiones social, económica y ambiental.',
    },
    {
      termino: 'Comercio justo',
      significado:
        'modelo comercial que garantiza condiciones laborales dignas, precios justos y sostenibilidad para productores y trabajadores.',
    },
    {
      termino: 'Comunicación transparente',
      significado:
        'práctica de informar honestamente al consumidor a través de todos los canales, evitando engaños y promoviendo la autenticidad.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'modelo que busca satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas.',
    },
    {
      termino: 'Informe Brundtland',
      significado:
        'documento publicado en 1987 por la Comisión de Desarrollo y Medio Ambiente de la ONU que introdujo el concepto de desarrollo sostenible.',
    },
    {
      termino: 'Marca ética',
      significado:
        'empresa o entidad que actúa conforme a valores y principios éticos, y cuya estrategia busca contribuir positivamente a la sociedad y al medio ambiente.',
    },
    {
      termino: 'Objetivo ético de la marca',
      significado:
        'propósito profundo y significativo de una organización, alineado con los ODS y que responde a la pregunta sobre su razón de ser.',
    },
    {
      termino: 'Objetivos de Desarrollo Sostenible (ODS):',
      significado:
        'conjunto de metas adoptadas por los Estados Miembros de la ONU en 2015 para erradicar la pobreza, proteger el planeta y garantizar paz y prosperidad para todos al año 2030.',
    },
    {
      termino: 'Producción ética',
      significado:
        'forma de fabricar productos que respeta la seguridad, el bienestar de los trabajadores y minimiza el impacto ambiental.',
    },
    {
      termino: '<em>Triple Bottom Line</em>',
      significado:
        'enfoque de gestión que evalúa el desempeño de una organización en tres áreas: social, ambiental y económica.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}

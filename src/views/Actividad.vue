<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Ética y sostenibilidad: construyendo marcas responsables',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con el desarrollo sostenible, los Objetivos de Desarrollo Sostenible (ODS), el modelo <em>Triple Bottom Line</em> y la construcción de marcas éticas en el contexto empresarial actual.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué documento introdujo el concepto de desarrollo sostenible en 1987?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informe del Milenio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Informe Brundtland.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Agenda 2030.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Protocolo de Kioto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el principal objetivo de la Agenda 2030?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fomentar la globalización comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la competitividad empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Alcanzar el desarrollo sostenible en todas sus dimensiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los impuestos al comercio internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'El enfoque Triple Bottom Line considera los siguientes elementos:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Educación, salud y economía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Social, ambiental y económico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tecnología, ética y producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rentabilidad, recursos y talento humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes marcas se enfoca en el empoderamiento femenino en Nepal y el uso de cáñamo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Reformation</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Hemper</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Toms Shoes</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Patagonia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué implica tener una marca ética?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actuar con coherencia entre lo que se dice, se hace y se representa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Imitar estrategias de marcas exitosas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar las preocupaciones medioambientales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ofrecer el producto más barato posible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué organización promueve el modelo de los 17 ODS?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organización de las Naciones Unidas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Banco Mundial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fondo Monetario Internacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organización Mundial del Comercio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de producción surgió como respuesta al desastre de Rana Plaza en 2013?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción ética.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producción personalizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción en masa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es un principio del Pacto Global de la ONU que deben integrar las marcas éticas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollo tecnológico acelerado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Respeto a los derechos humanos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción de impuestos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Privatización de los servicios públicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué dimensión del Triple Bottom Line se refiere a generar empleo en la comunidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Legal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Económica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto caracteriza al movimiento <em>slow fashion</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Velocidad de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de materiales sintéticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducción del impacto ambiental y condiciones laborales justas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Campañas masivas de descuento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El desarrollo sostenible solo considera el crecimiento económico.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una marca ética debe ser coherente en su propósito, valores y acciones.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El informe Brundtland fue publicado por la ONU en 1987.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El modelo Triple Bottom Line fue desarrollado en el siglo XIX.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La comunicación transparente implica no engañar al consumidor.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

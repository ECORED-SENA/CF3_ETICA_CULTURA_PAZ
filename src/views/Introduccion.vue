<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo sostenible ha cobrado relevancia mundial como una respuesta integral a los desafíos sociales, económicos y ambientales que enfrenta la humanidad. Desde la publicación del Informe Brundtland en 1987, se ha impulsado una visión de progreso que prioriza la satisfacción de las necesidades actuales sin comprometer las de las generaciones futuras. Esta visión se consolidó con la adopción de la agenda 2030 y los Objetivos de Desarrollo Sostenible (ODS), los cuales constituyen una hoja de ruta para lograr un equilibrio entre crecimiento económico, inclusión social y protección del medio ambiente.
    
    p.mb-4 En este contexto, las marcas y organizaciones enfrentan el reto de redefinir sus propósitos, valores y prácticas, asumiendo una responsabilidad activa frente a la sociedad y el planeta. Crear una marca ética implica incorporar principios como la equidad, el respeto a los derechos humanos, la transparencia y el compromiso con la sostenibilidad. Estos valores deben reflejarse tanto en los productos como en los procesos de producción, distribución, comunicación y relación con las comunidades.

    .row.align-items-center
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/intro/img2.jpg", alt="").m-auto
      .col-xl
        p.mb-0 Además, el modelo <em>Triple Bottom Line</em> propone evaluar el éxito empresarial no solo en términos financieros, sino también a partir del impacto social y ambiental generado. Este enfoque permite a las organizaciones construir marcas valientes y conscientes, capaces de responder a las demandas de consumidores que valoran la justicia social, el bienestar colectivo y la protección de los recursos naturales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

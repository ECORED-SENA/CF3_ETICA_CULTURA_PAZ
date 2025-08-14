<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 <em>Triple Bottom Line</em>
    
    p.mb-5 El concepto de Triple Bottom Line fue establecido por <strong>John Elkington en 1994</strong> y representa una evolución del enfoque tradicional de resultados empresariales (<em>Bottom Line</em>), que se centraba únicamente en el aspecto económico. El <em>Triple Bottom Line</em> propone una <strong>evaluación integral del impacto de una empresa</strong> considerando tres dimensiones interdependientes:

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img19.png", alt="").m-auto
      .col-xl
        .row.justify-content-center.mb-4
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img20.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body
                p.mb-0 Económica
          
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img21.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body
                p.mb-0 Social

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .estilo___tarjeta(data-aos="zoom-in")
              .estilo___tarjeta_img
                figure
                  img(src="@/assets/curso/temas/img22.svg", alt='' style="max-width: 110px").m-auto
              .estilo___tarjeta_body
                p.mb-0 Ambiental
        p.mb-0  Este enfoque responde al avance de la <strong>gestión empresarial en responsabilidad social</strong> a partir de mediados del siglo XX. La sostenibilidad, bajo esta perspectiva, exige estrategias que articulen estos tres ámbitos y contemplen a todas las personas involucradas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Dimensiones del <em>Triple Bottom Line</em>
    
    p.mb-5 A continuación, se describen las dimensiones que componen el modelo <em>Triple Bottom Line</em>, junto con sus aspectos clave y herramientas que permiten a las empresas evaluar y orientar su impacto de forma integral:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Social")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img23.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-3 Implica generar bienestar en la comunidad. Se puede lograr mediante:
            <ul class="fa-ul estilo___ul mb-4">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Alianzas con instituciones expertas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Voluntariado.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Participación comunitaria.</li>
            </ul>
            h4.txt--purpura.mb-3 Medir el impacto social puede ser complejo. Hoy se utilizan herramientas como:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span><em>Global Reporting Initiative</em> (GRI).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span><em>Social Return on Investment</em> (SROI).</li>
            </ul>

      .py-3.py-md-4(titulo="Económica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img24.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-3 Asegura la viabilidad y buena gestión financiera de la empresa. Incluye:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Desarrollo de proyectos productivos que generen empleo o ingresos en la comunidad.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Formación de capacidades locales.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Inversión empresarial para hacer posibles los proyectos.</li>
            </ul>

      .py-3.py-md-4(titulo="Ambiental")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img25.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-3 Evalúa el impacto sobre el entorno natural. Un proyecto debe:
            <ul class="fa-ul estilo___ul mb-3">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Beneficiar al medio ambiente.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Promover el uso sostenible de recursos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-user-tie color___i"></i></span>Proteger la biodiversidad.</li>
            </ul>
            p.mb-0 La sostenibilidad ecológica es indispensable para la legitimidad social y ética de las marcas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo práctico: Proyecto de reforestación de HSBC 
    
    p.mb-5 HSBC México, institución financiera, desarrolla un proyecto de reforestación que aplica el enfoque <em>Triple Bottom Line</em> e integra de forma armoniosa los tres pilares.

    .row.justify-content-center
      .col-xl-4.col-lg-7.col-md-9.mb-xl-0.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img26.png", alt="")
          .crd_hover_txt--body.ajuste___box_2.ajuste___box_3
            h4 Económico
            p.mb-0 Inversión financiera y generación de empleo.

      .col-xl-4.col-lg-7.col-md-9.mb-xl-0.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img27.png", alt="")
          .crd_hover_txt--body.ajuste___box_2
            h4 Social
            p.mb-0 Participación de comunidades locales y voluntariado.

      .col-xl-4.col-lg-7.col-md-9.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img28.png", alt="")
          .crd_hover_txt--body.ajuste___box_2.ajuste___box_3
            h4 Ambiental
            p.mb-0 Reforestación y protección de la biodiversidad.

</template>

<script>
export default {
  name: 'Tema2',
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

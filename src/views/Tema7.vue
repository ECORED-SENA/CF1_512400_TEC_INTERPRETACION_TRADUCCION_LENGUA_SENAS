<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Perfiles y funciones del intérprete

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 El servicio de interpretación requiere de una serie de perfiles con diferentes habilidades que garanticen un servicio de calidad y efectivo, no cualquier persona puede ser intérprete del lenguaje de señas se necesita de una preparación constante, de buena actitud, pero lo más importante de buena disposición.

    p.mb-4(data-aos="fade") A través de los años, las personas sordas han demandado un mayor acceso a la información, la comunicación y los servicios que ofrece la sociedad, por lo que es más exigente para los intérpretes tener claridad en sus perfiles y funciones; en especial, aquellas que tienen que ver con la coordinación del servicio en un equipo de trabajo, al igual que de las habilidades y actitudes; en el siguiente video se presenta dicho perfil.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3ZiGzK10lk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade") Los contextos de interpretación son diversos, afortunadamente las personas sordas han venido haciendo presencia en diferentes escenarios, razón por la que el servicio de interpretación se amplía y plantea nuevos retos para los intérpretes en tanto registros, vocabulario, logística, formas de contratación, organización de equipos, entre otras.
    p.mb-4(data-aos="fade") Se invita a conocer los ámbitos en los que un intérprete de lengua de señas puede prestar sus servicios.

    .row.fondo-tema7.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

          .col-md-12.d-flex.justify-content-center.mb-1
            .subt-blue
              h4.mb-0 Ámbitos de interpretación

          .col-md-9 
            figure.d-md-block.d-none
              img.mx-auto(src='@/assets/curso/temas/tema7/figura-pc.svg' alt='Ámbitos de interpretación')
            figure.d-md-none
              img.mx-auto(src='@/assets/curso/temas/tema7/figura-mobile.svg' alt='Ámbitos de interpretación')


</template>

<script>
export default {
  name: 'Tema7',
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

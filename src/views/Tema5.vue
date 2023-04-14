<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Trabajo en equipo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 
          strong.t-red El trabajo en equipo 
          | como esfuerzo integrado para lograr un propósito, meta u objetivo por parte de un grupo de personas, es la representación de un trabajo efectivo que parte de ideas comunes, decisiones consensuadas, fortalecimiento de habilidades y destrezas; además de facilitar la cooperación, autonomía y la motivación.


    .row.justify-content-evenly.align-items-center.mb-5
      .col-md-8(data-aos="fade-right")
        p Las relaciones que se establecen con los colegas podrán ser muy diferentes en función de la actividad que se realiza, el lugar de trabajo, la cantidad de empleados con las que se establece relación y coordina acciones, el tiempo de trabajo, la cultura, condiciones, situaciones y ámbitos como el caso de la interpretación y traducción de lengua de señas, que pone de manifiesto el establecimiento de parámetros y ciertos códigos de conducta que permitan interacciones recíprocas y acuerdos para trabajar en equipo.
        .cajon.color-acento-contenido.mb-4
          .row.justify-content-evenly.align-items-center.p-3
            .col-md-2.col-6
              img.px-3(src='@/assets/curso/temas/tema5/ico.svg', alt='Icono decorativo')
            .col-md-10
              p.mb-0 El manejo de unas adecuadas relaciones interpersonales con los colegas optimiza el desempeño de las funciones desde el concepto de equipo, las actitudes, la comunicación, la autoestima y la motivación.            
        p Desde el ámbito de la interpretación y traducción de lengua de señas, la confiabilidad y validez de las relaciones interpersonales, tiene un impacto significativo y representa un elevado nivel de satisfacción laboral, ya que la función y desempeño de esta labor tiene implicaciones sociales y culturales desde la compresión y la convivencia. 
      .col-md-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema5/img2.svg', alt='Imagen decorativa')



</template>

<script>
export default {
  name: 'Tema5',
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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .row.justify-content-evenly.align-items-center.bg-1.p-4.mb-5(data-aos="fade-down")
      .col-md-1
        img(src='@/assets/curso/temas/intro/icono.svg', alt='Icono decorativo')
      .col-md-10
        p.mb-0 Bienvenido a este componente formativo denominado 
          strong.t-blue Fundamentos del servicio de interpretación 
          | para comenzar el recorrido por el mismo, revise la información que se presenta a continuación:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JfEgFWAgFT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La interpretación de lenguaje de señas es una tarea que requiere de ciertos procesos logísticos para cumplir con las expectativas del cliente y lograr su satisfacción ofreciendo un servicio efectivo y de calidad. El lenguaje de señas facilita el proceso de comunicación de personas con discapacidad auditiva, por ende, es fundamental conocer los elementos, características y los pasos que debe seguir un intérprete en el desarrollo de su labor siendo este el principal objetivo de este componente formativo.
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

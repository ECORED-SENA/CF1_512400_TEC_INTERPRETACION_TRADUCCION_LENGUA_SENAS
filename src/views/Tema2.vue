<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Atención al usuario


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Hablar de atención al usuario no es solo definir los parámetros relacionados con la comunicación interna o externa, y sus correspondientes canales para garantizar una adecuada y oportuna respuesta, 
          b.t-red es también proporcionar los estándares de comunicación y de la proyección de una imagen personal, segura, eficiente y eficaz, para satisfacer de manera oportuna los requerimientos que solicitan nuestros usuarios.

    .row.align-items-center.mb-5
      .col-md-8.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-9.box-shadow.py-4.px-3
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-11
                .bloque-texto-b.color-acento-contenido.comillas.p-4.mb-4
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left
                    h4.mb-3 El Estado colombiano reconoce la Lengua Manual Colombiana, como idioma propio de la Comunidad Sorda del País  #[br]#[br]
                    h5.text-right López, (2015).
                    i.fas.fa-quote-right
            .row.justify-content-center 
              .col-md-11
                .bloque-texto-b.color-acento-contenido.comillas.p-4.mb-4
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left
                    h4.mb-3 Las entidades estatales de cualquier orden, incorporan paulatinamente dentro de los programas de atención al cliente, el servicio de intérprete y guía intérprete para las personas sordas y sordociegas que lo requieran de manera directa o mediante convenios con organismos que ofrezcan tal servicio.”  #[br]#[br]
                    h5.text-right Ley 982 de 2005
                    i.fas.fa-quote-right
      .col-md-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img2.png', alt='Imagen decorativa')


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Análisis de los destinatarios

    .row.align-items-center
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img3.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Es importante dar mejor precisión al concepto de atención al usuario, haga clic en el siguiente botón para conocerla:
        .cajon.color-primario.mb-4
          .row.justify-content-evenly.align-items-center.p-3.p-md-4
            .col-md-10
              h4.t-red Atención al usuario
              p.mb-0 Conjunto de elementos intangibles, acciones integradas, interacciones personales y actitudes para satisfacer la necesidad de un cliente y lo que requiere, además de un protocolo y de una política.
            .col-md-2.col-6
              img.px-1(src='@/assets/curso/temas/tema2/ico.svg', alt='Icono decorativo')
        p Las expectativas de los usuarios son diferentes y variadas, por lo que es fundamental conocerlas y contar con ellas. El ideal de éxito y calidad del servicio reside en superar esas expectativas. Ello no significa endosar información o instrucciones innecesarias, pero sí dar una respuesta adecuada, completa, rápida y fiable, que aporte valor adicional.

    p.mb-4(data-aos="fade") Estas expectativas serán mucho más exigentes, cuando se habla de un servicio de interpretación, en la que la atención al usuario lleva implícita una actividad que permite que varias partes comprendan un mensaje a través de un sistema de signos, gestos y expresiones y que requiere una comprensión detallada de la cultura sorda y todos sus matices. 
      b.t-red Para identificar las expectativas del usuario, se sugiere revisar con atención la siguiente infografía.    

    .row.fondo-tema2.align-items-center.py-3.mb-2
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .subt-boc.mb-4(data-aos="fade")
            h4.text-white.mb-0 Expectativas del usuario

          .col-md-10
            ImagenInfografica.tema2.color-acento-botones
              template(v-slot:imagen)
                figure.d-md-block.d-none
                  img(src='@/assets/curso/temas/tema2/img-pc-infog.svg', alt='Niveles de servicio')
                figure.d-md-none
                  img(src='@/assets/curso/temas/tema2/img-mob-infog.svg', alt='Niveles de servicio')  

              .tarjeta.bg-10.p-3(x="9%" y="79%" numero="+")
                .h4.mb-2 1- Eficacia
                p.mb-0 Obtención real de resultados y respuestas.
              .tarjeta.bg-10.p-3(x="9%" y="98%" numero="+")
                .h4.mb-2 2 - Rapidez
                p.mb-0 El tiempo es un factor fundamental, siempre escaso y valioso.
              .tarjeta.bg-10.p-3(x="30%" y="98%" numero="+")
                .h4.mb-2 3 - Facilidad
                p.mb-0 Simplicidad, comodidad y ahorro de esfuerzo. 
              .tarjeta.bg-10.p-3(x="50%" y="98%" numero="+")
                .h4.mb-2 4 - Autonomía
                p.mb-0 Tendencia a preferir, en lo posible, sistemas de autoservicio. 
              .tarjeta.bg-10.p-3(x="71%" y="98%" numero="+")
                .h4.mb-2 5 - Concentración
                p.mb-0 Encontrar la respuesta completa en un sitio, por una sola vía. 
              .tarjeta.bg-10.p-3(x="91%" y="98%" numero="+")
                .h4.mb-2 6 - Fiabilidad
                p.mb-0 Garantías sobre el valor y calidad de la información recibida. 
              .tarjeta.bg-10.p-3(x="91%" y="79%" numero="+")
                .h4.mb-2 7 - Trato individualizado
                p.mb-0 Atención a las peculiaridades personales.

        //.row.align-items-end.justify-content-center(data-aos="fade-down").d-md-flex.d-lg-flex.d-none
          .col-lg-2.mb-4
            .tarjeta.tema2
              h5 1- Eficacia
          .col-lg-6.mb-4
            img(src='@/assets/curso/temas/tema2/img4.svg', alt='Expectativas del usuarios')
          .col-lg-2.mb-4
            .tarjeta.tema2
              h5 7 - Trato individualizado
        //.row.align-items-end.justify-content-center.mb-5(data-aos="fade-down").d-md-flex.d-lg-flex.d-none
          .col-lg-2.mb-4
            .tarjeta.tema2
              h5 2 - Rapidez
          .col-lg-2.mb-4
            .tarjeta.tema2
              h5 3 - Facilidad
          .col-lg-2.mb-4
            .tarjeta.tema2
              h5 4 - Autonomía
          .col-lg-2.mb-4
            .tarjeta.tema2
              h5 5 - Concentración
          .col-lg-2.mb-4
            .tarjeta.tema2
              h5 6 - Fiabilidad 
        //.row.align-items-center.mb-5(data-aos="fade-down").d-md-none.d-lg-none
          .col-12.mb-4
            img(src='@/assets/curso/temas/tema2/img4.svg', alt='Expectativas del usuarios')
          .col-6.mb-4
            .tarjeta.tema2
              h5 1- Eficacia
          .col-6.mb-4
            .tarjeta.tema2
              h5 2 - Rapidez
          .col-6.mb-4
            .tarjeta.tema2
              h5 3 - Facilidad
          .col-6.mb-4
            .tarjeta.tema2
              h5 4 - Autonomía
          .col-6.mb-4
            .tarjeta.tema2
              h5 5 - Concentración
          .col-6.mb-4
            .tarjeta.tema2
              h5 6 - Fiabilidad
          .col-6.mb-4
            .tarjeta.tema2
              h5 7 - Trato individualizado

    p.mb-4(data-aos="fade") Es innegable que la atención al usuario, indica la necesidad de establecer unos parámetros que respondan a un protocolo de servicio, pero en especial a una política, 
      b.t-red ahora se expone a profundidad en qué consiste dicha política:

    TabsA.color-primario.mb-5
      .tarjeta.p-4(titulo="¿Qué es?")
        h4 ¿Qué es?
        p La política de servicio al cliente son las orientaciones, directrices o procedimientos que rigen la actuación de una persona o entidad frente a sus clientes.
      .tarjeta.p-4(titulo="¿Cuál es su importancia?")
        h4 ¿Cuál es su importancia?
        p Su importancia radica en la estandarización de procedimientos que los empleados deben seguir al momento de atender una solicitud, lo que sin duda alguna marca la personalidad de una organización.
      .tarjeta.p-4(titulo="¿Cómo se ejecuta?")
        h4 ¿Cómo se ejecuta?
        p La política de servicio al cliente debe ser compartida con los empleados, puede ser a través de una capacitación o charla programada, donde todos escuchen el procedimiento que deben seguir para atender la solicitud de un cliente, lo que permitirá un mayor control, seguimiento y posterior evaluación de esta.


    .subt-3er.mb-4(data-aos="fade")
      h3.text-white.mb-0 Etiqueta y protocolo en el servicio de interpretación

    p.mb-2(data-aos="fade") Cuando se habla de etiqueta y protocolo es necesario mencionar el Código Deontológico, es decir:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-9
        .bloque-texto-b.color-acento-contenido.comillas.comillas-rosas.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-3 Un conjunto de pautas o deberes que los profesionales tienen que seguir en el desarrollo de su actividad #[br]#[br]
            h5.text-right (Méndez, 2010).
            i.fas.fa-quote-right

    .tarjeta.bg-3 
      .row.justify-content-evenly.align-items-center.p-3.p-md-4
        .col-md-1.col-5.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema2/ico2.svg', alt='Icono decorativo')
        .col-md-11.text-white
          p.mb-0 De acuerdo con lo anterior, se tendrán en cuenta diversos tipos de características como: 
            b.t-pink las personales, intelectuales, éticas, entre otras. 
            | También debe considerarse el atuendo adecuado, la apariencia, la ubicación espacial, la preparación de los temas a interpretar, el tono discursivo con el que se emite el mensaje, entre otros.



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

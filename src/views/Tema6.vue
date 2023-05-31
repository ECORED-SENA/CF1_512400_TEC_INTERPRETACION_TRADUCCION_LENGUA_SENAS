<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Aspectos administrativos y contratación (legislación, parafiscales)

    
    p.mb-4(data-aos="fade") La administración junto con la planeación son procesos sensibles y fundamentales en cualquier organización, empresa o proceso, en tanto constituye el momento clave para la definición del marco legal, recursos, contratación y procedimientos indispensables para la ejecución de acciones que determinan el quehacer.  

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 En el contexto de la interpretación y traducción, en el que se genera un alto nivel de informalidad en la prestación del servicio, los aspectos administrativos se convierten en una acción de mejora en la gestión y prioridad fundamental para ofrecer servicios y apoyos inclusivos que permitan el acceso y la participación plena desde el marco legal, recursos, contratación y procedimientos.

    .row.justify-content-center.mb-5 
      .col-md-10(data-aos="fade")
        .cajon.color-acento-contenido
          .row.justify-content-evenly.align-items-center.p-3
            .col-md-2.col-6
              img.p-4(src='@/assets/curso/temas/tema6/ico.svg', alt='Icono decorativo')
            .col-md-10
              p.mb-0 “El Estado garantizará y proveerá la ayuda de intérpretes idóneos para que sea este un medio a través del cual las personas sordas puedan acceder a todos los servicios que como ciudadanos colombianos les confiere la Constitución. Para ello el Estado organizará a través de entes oficiales o por convenios con asociaciones de sordos, la presencia de intérpretes para el acceso a los servicios mencionados” (Ley 324 de 1996).

    p.mb-4(data-aos="fade") Identificar los recursos de acuerdo con la necesidad de la actividad, implica hacer un recorrido por el proyecto a emprender, máxime si se considera que estos no solo están en el orden de lo físico, sino y especialmente en el ámbito de la interpretación y la traducción, en el orden de lo humano.

    .row.justify-content-center
      .col-md-5(data-aos="fade-right")
        p Siendo así, el ciclo PHVA (Planificar, Hacer, Verificar y Actuar), desarrollado por Edward Deming, responde a un ciclo dinámico que se puede emplear en procesos y proyectos, es la base para proyección de los recursos requeridos:
        ul.lista-ul--color.color-primario.lista-ul--separador.img-listado
          li 
            img(src='@/assets/curso/temas/tema6/ico-list.svg')
            | Humanos.
          li 
            img(src='@/assets/curso/temas/tema6/ico-list.svg')
            | Tecnológicos.
          li 
            img(src='@/assets/curso/temas/tema6/ico-list.svg')
            | Económicos. 
          li 
            img(src='@/assets/curso/temas/tema6/ico-list.svg')
            | Documentación.
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema6/img2.png', alt='Imagen decorativa')


    .row.fondo-tema6-1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

          .col-md-10
            .titulo-sexto.color-acento-contenido.mb-1
              p.mb-0 #[b Figura 2.] Ciclo PHVA
          .col-md-5
            figure
              img.mx-auto(src='@/assets/curso/temas/tema6/fig2.png' alt='Ciclo PHVA')


    Separador

    #t_6_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.1 Contratación (legislación, parafiscales)

    p(data-aos="fade") Una contratación establece la concreción de un contrato, es decir, un documento a través del cual se acuerda entre las partes intervinientes la ejecución de una actividad determinada, a cambio de la cual, la persona contratada recibirá una suma de dinero, la cual será estipulada en el documento.

    p(data-aos="fade") Existen diferentes tipos de contratos. A fin de comprender los detalles y características más relevantes junto con los derechos y obligaciones tanto del prestador de servicio como del empleador, a continuación, se nombran de manera general estas figuras.

    p.t-red.text-bold.mb-4(data-aos="fade") A continuación, se exponen los tipos de contratos a los que puede aspirar un intérprete de lengua de señas.

    .row.fondo-tema6-2.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

          .col-md-10
            ImagenInfografica.tema6.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure.d-md-block.d-none
                  img(src='@/assets/curso/temas/tema6/img-infog-pc.svg', alt='Tipos de contratos')
                figure.d-md-none
                  img(src='@/assets/curso/temas/tema6/img-infog-mob.svg', alt='Tipos de contratos')  

              .tarjeta.bg-1.item1.p-3(x="9%" y="44%" numero="+")
                .h4.mb-2 Contrato civil por prestación de servicios
                p.mb-0 Un contrato por prestación de servicios, a diferencia de un contrato laboral, no incluye cargas prestacionales y el trabajador no tiene que cumplir horarios. El trabajador debe asumir la salud y las pensiones, porque solo se le pagará por el trabajo contratado. En un contrato por prestación de servicios quien rige la relación laboral es el Código Civil o el Código de Comercio, según la actividad profesional.
              .tarjeta.bg-1.item2.p-3(x="9%" y="70%" numero="+")
                .h4.mb-2 Contrato a término fijo
                p.mb-0 Se caracteriza por tener una fecha de inicio y de terminación que no puede superar tres años, es fundamental que sea por escrito. Puede ser prorrogado indefinidamente cuando su vigencia sea superior a un  año, o cuando siendo inferior, se haya prorrogado hasta por tres veces.
              .tarjeta.bg-1.item3.p-3(x="9%" y="96%" numero="+")
                .h4.mb-2 Contrato a término indefinido
                p.mb-0 No tiene estipulada una fecha de culminación de la obligación contractual, cuya duración no haya sido expresamente estipulada o no resulte de la naturaleza de la obra o servicio que debe ejecutarse. Puede hacerse por escrito o de forma verbal.
              .tarjeta.bg-1.item4.p-3(x="91%" y="43%" numero="+")
                .h4.mb-2 Contrato de aprendizaje
                p.mb-0 Es aquel mediante el cual una persona natural realiza formación teórica práctica en una entidad autorizada, a cambio de que la empresa proporcione los medios para adquirir formación profesional requerida en su ocupación, por cualquier tiempo determinado no superior a dos años, por esto recibe un apoyo de sostenimiento mensual.
              .tarjeta.bg-1.item5.p-3(x="91%" y="69%" numero="+")
                .h4.mb-2 Contrato de obra a labor
                p.mb-0 Es un contrato que se realiza para una labor específica y termina cuando la obra llega a su fin. Este tipo de vinculación es característica de trabajos de construcción, de universidades y colegios. Este contrato es igual en términos de beneficios y descuentos a los contratos indefinidos y definidos, por ser un contrato laboral.
              .tarjeta.bg-1.item6.p-3(x="91%" y="95%" numero="+")
                .h4.mb-2 Contrato temporal
                p.mb-0 El Código Sustantivo del Trabajo define el trabajo ocasional, accidental o transitorio, como aquel no mayor de 30 días, y cuyas labores sean distintas de las actividades normales del empleador. Esta forma de contratación puede hacerse por escrito o verbalmente.


          .col-md-10
            .cajon.color-primario
              .row.justify-content-evenly.align-items-center.p-3
                .col-md-2.col-6
                  img.p-4(src='@/assets/curso/temas/tema6/ico.svg', alt='Icono decorativo')
                .col-md-10
                  p.mb-0 Tener conocimiento del tipo de contratación, permite entender aspectos legales relacionados con el tipo de remuneración como, por ejemplo, cómo será la periodicidad de pago, qué acciones del servidor no constituyen un referente de remuneración, qué tipos de descuentos le benefician y cuáles son sus derechos y obligaciones.


    p(data-aos="fade") En el caso particular de la remuneración de los intérpretes en el entorno educativo, que es el contexto en el que se desenvuelven gran parte de los intérpretes de lengua de señas en Colombia, el Instituto Nacional para Sordos (Insor), ha venido realizando algunos ejercicios encaminados a la proyección de una base salarial para los intérpretes para orientar la remuneración por la prestación del servicio, dando respuesta a lo establecido en el parágrafo del artículo 7 de la Ley 982 de 2005. En el caso de los sectores no educativos en los que se presta el servicio, se realiza un acuerdo salarial entre las partes o lo conviene una de ellas.



</template>

<script>
export default {
  name: 'Tema6',
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

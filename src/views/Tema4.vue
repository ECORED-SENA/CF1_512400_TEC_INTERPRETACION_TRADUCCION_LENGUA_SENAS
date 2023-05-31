<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Inclusión y discapacidad


    p.mb-4(data-aos="fade") Aquí 
      b.t-red es importante tener claridad con respecto a dichos términos, comenzando por el de inclusión:

    .row.justify-content-evenly.align-items-center
      .col-md-9(data-aos="fade-right")
        .cajon.color-primario
          .row.justify-content-evenly.p-3.p-md-5.p-lg-5
            .col-md-2.col-6
              img.px-1(src='@/assets/curso/temas/tema4/ico.svg', alt='Icono decorativo')
            .col-md-10
              h4 Inclusión
              p.mb-0 Según la Unesco (2005), la inclusión es “un enfoque que responde positivamente a la diversidad de las personas y a las diferencias individuales, entendiendo que la diversidad no es un problema, sino una oportunidad para el enriquecimiento de la sociedad, a través de la activa participación en la vida familiar, en la educación, en el trabajo y en general en todos los procesos sociales, culturales y en las comunidades”.
      .col-md-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img.png', alt='Imagen decorativa')


    Separador

    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1 ¿Qué permite la inclusión?

    .row.align-items-center
      .col-md-3.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
      .col-md-9(data-aos="fade-left")
        ul.lista-ul--color.color-primario.lista-ul--separador.img-listado
          li 
            img(src='@/assets/curso/temas/tema6/ico-list.svg')
            | Disfrutar de un mundo más equitativo y respetuoso frente a las diferencias.
          li 
            img(src='@/assets/curso/temas/tema6/ico-list.svg')
            | Beneficiar a todas las personas sin perjuicio de sus características, es decir, sin etiquetar ni excluir.
          li 
            img(src='@/assets/curso/temas/tema6/ico-list.svg')
            | Proporcionar un acceso equitativo, revisando procesos constantemente y valorando el aporte de cada persona a la sociedad.


    Separador

    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2 Discapacidad

    p.mb-4(data-aos="fade") El Art. 1° de la Convención Internacional sobre los Derechos de las Personas con Discapacidad, el cual fue aprobado en 2006 por la Asamblea General de las Naciones Unidas y en Argentina en 2008 a través de la Ley 26378, aclara este término así:

    .row.fondo-tema4.align-items-center.pt-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .col-md-10.mb-4(data-aos="fade-down")
            .cajon.color-acento-botones.cajon1
              .row.justify-content-evenly.align-items-center.p-3.p-md-4
                .col-md-1.col-6.px-1
                  img(src='@/assets/curso/temas/tema4/ico2.svg', alt='Icono decorativo')
                .col-md-10.text-white
                  h4 Discapacidad
                  p.mb-0 La discapacidad es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.
          
          p.mb-5(data-aos="fade") Según la Guía de atención a las personas con discapacidad del Ministerio de Salud y Protección Social, existen en Colombia nueve categorías o ámbitos en los que se puede presentar una discapacidad:

          .row.justify-content-center(data-aos="fade-down")
            .col-lg-9.position-relative
              .avatar
                figure
                  img(src="@/assets/curso/temas/tema4/conectada.svg", alt="Decorativa").imgavat
              .crd.crd--avatarHorizontal.crd--first.py-3
                .row.align-items-center
                  .col-md-6.row.align-items-center
                    .col-auto
                      figure
                        img(src="@/assets/curso/temas/tema4/conect1.svg", alt="Movilidad").img80
                    .col
                      h4.mb-0 Movilidad.
                  .col-md-6.row.align-items-center 
                    .col-auto
                      figure
                        img(src="@/assets/curso/temas/tema4/conect1-1.svg", alt="Mental cognitiva").img80
                    .col
                      h4.mb-0 Mental cognitiva.
              
              .crd.crd--avatarHorizontal.crd--2.py-3
                .row.align-items-center
                  .col-md-6.row.align-items-center
                    .col-auto
                      figure
                        img(src="@/assets/curso/temas/tema4/conect2.svg", alt="Sensorial auditiva.").img80
                    .col
                      h4.mb-0 Sensorial auditiva.
                  .col-md-6.row.align-items-center 
                    .col-auto
                      figure
                        img(src="@/assets/curso/temas/tema4/conect2-1.svg", alt="Mental cognitiva").img80
                    .col
                      h4.mb-0 Mental psicosocial.
            
              .crd.crd--avatarHorizontal.crd--3.py-3
                .row.align-items-center
                  .col-md-6.row.align-items-center
                    .col-auto
                      figure
                        img(src="@/assets/curso/temas/tema4/conect3.svg", alt="Sensorial visual").img80
                    .col
                      h4.mb-0 Sensorial visual.
                  .col-md-6.row.align-items-center 
                    .col-auto
                        figure
                          img(src="@/assets/curso/temas/tema4/conect3-1.svg", alt="Voz y habla").img80
                    .col
                      h4.mb-0 Voz y habla.

              .crd.crd--avatarHorizontal.crd--4.py-3
                .row.align-items-center
                  .col-md-6.row.align-items-center
                    .col-auto
                      figure
                        img(src="@/assets/curso/temas/tema4/conect4.svg", alt="Sensorial gusto, olfato, tacto").img80
                    .col
                      h4.mb-0 Sensorial gusto, olfato, tacto.
                  .col-md-6.row.align-items-center 
                    .col-auto
                        figure
                          img(src="@/assets/curso/temas/tema4/conect4-1.svg", alt="Piel, pelo y uñas").img80
                    .col
                      h4.mb-0 Piel, pelo y uñas.

              .crd.crd--avatarHorizontal.crd--last.py-3
                .row.align-items-center
                  .col-md-12.row.align-items-center
                    .col-auto
                      figure
                        img(src="@/assets/curso/temas/tema4/conect5.svg", alt="Sistémica").img80
                    .col
                      h4.mb-0 Sistémica.





    p.mb-4(data-aos="fade") Es fundamental atender al lenguaje que se usa en relación con las personas en situación de discapacidad para no ofender o faltar a la dignidad de estos grupos. En el siguiente documento, se exponen las formas actuales y correctas de referirse a las personas con discapacidad de acuerdo con su diagnóstico.

    .row.justify-content-center
      .col-md-8(data-aos="fade-down")
        .tarjeta.bg-gradient.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-md-4(src="@/assets/curso/temas/tema4/ico3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h5.mb-0 Formas correctas de referirse a las personas con discapacidad
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/formas_correctas_referirse_personas_discapacidad.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    Separador

    #t_4_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.3 Modelos de discapacidad

    p.mb-4(data-aos="fade") El concepto diacrónico de discapacidad ha trascendido en diferentes modelos o normas con visiones y marcos de actuación que han influido en la manera de ver, apoyar y guiar las prácticas que la sociedad ha adoptado sobre la población con discapacidad. Los principales modelos son:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-2" data-aos="fade-down")
      .row.justify-content-center(titulo="Modelo de la prescindencia")
        .col-md-11.mb-4.mb-md-0
          p Busca terminar la vida de las personas con discapacidad o marginarlas. Tiene bases religiosas por lo que se refieren a este grupo como demonios. La sociedad debe prescindir de las personas a través de la eugenesia (método para mejorar la raza). Señala que las personas con discapacidad no son necesarias, porque no contribuyen a la sociedad.
      .row.justify-content-center(titulo="Modelo tradicional")
        .col-md-11.mb-4.mb-md-0
          p La creencia general de que la discapacidad es un castigo divino, la voluntad de Dios o una prueba de este. Incluso se cree que es un castigo por un pecado cometido, por lo que las familias los esconden por vergüenza. Algunas de estas creencias están unidas a algún tipo de práctica religiosa o ritual.
      .row.justify-content-center(titulo="Modelo médico, biológico o patológico")
        .col-md-11.mb-4.mb-md-0
          p Considera la discapacidad como un problema individual centrado en una alteración corporal que requiere cuidados médicos y que la lleva a asumir un papel de paciente. El tratamiento es dirigido por el profesional de la salud y enfatiza en la eliminación o en una supuesta cura de la discapacidad. El paradigma biológico centra el problema en la persona que tiene deficiencias o limitaciones.
      .row.justify-content-center(titulo="Modelo social")
        .col-md-11.mb-4.mb-md-0
          p Centra el problema de la discapacidad en la sociedad y no en el individuo. La discapacidad no se entiende en este modelo como un atributo de la persona, sino como un complejo conjunto de condiciones creadas por el entorno. Busca garantizar la participación de las personas con discapacidad en la vida social.
      .row.justify-content-center(titulo="Modelo político activista")
        .col-md-11.mb-4.mb-md-0
          p Tiene como eje el reconocimiento de los derechos de las personas con discapacidad, promoviendo acciones basadas en lo político y en lo social que han iniciado diferentes organizaciones de grupos que apoyan sus derechos. 
      .row.justify-content-center(titulo="Modelo universal")
        .col-md-11.mb-4.mb-md-0
          p Plantea la discapacidad como un hecho universal, en la medida en que toda la población está en situación de riesgo de adquirirla, por lo tanto, las iniciativas públicas deben dirigirse a toda la población. La discapacidad no se entiende como un atributo que diferencia a la persona con discapacidad del resto de la población, sino que es una característica inherente a la condición humana.
      .row.justify-content-center(titulo="Modelo biopsicosocial")
        .col-md-11.mb-4.mb-md-0
          p Considera que es posible establecer un lazo entre los distintos niveles en la vida de un individuo (biológico, personal y social) que sustentan la discapacidad. Clasifica y mide la discapacidad sin estigmatizar.


    Separador

    #t_4_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.4 Enfoques en la discapacidad

    p(data-aos="fade") El enfoque, orientación o punto de vista que analiza la discapacidad e inclusión social en Colombia ha superado el enfoque de las políticas de asistencia o protección, y ha trascendido hacia una visión de desarrollo humano con un enfoque diferencial y de derechos; dimensionando todos los aspectos de la vida de una persona, incluyendo la relación con su familia, el contexto político, cultural, social y económico.

    h5.t-red.mb-4(data-aos="fade") Aquí se exponen los diferentes enfoques de la discapacidad:

    .tarjeta.bg-slider.p-4.pt-md-5.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Enfoque de derechos
            p Reconoce que la población con discapacidad es titular de derechos que obligan al Estado a garantizar su ejercicio. Se rompe el paradigma de personas con necesidades que deben ser asistidas, y se pasa a reconocer a las personas con discapacidad como sujetos con derecho a exigir prestaciones y conductas en un marco de deberes y de corresponsabilidad.      
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema4/slide1.png', alt='Enfoque de derechos')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Enfoque diferencial
            p Involucra las condiciones y posiciones de los distintos actores sociales, desde una mirada de género, etnia e identidad cultural, discapacidad o ciclo vital.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema4/slide2.png', alt='Enfoque diferencial')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Enfoque territorial
            p Pasa de la formulación de acciones que privilegian una visión fraccionada, a un ejercicio que se centra en el lugar que habita el individuo y privilegia la multidimensionalidad (económica, social, política, ambiental y cultural) del espacio.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema4/slide3.png', alt='Enfoque territorial')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Enfoque de desarrollo humano
            p Sitúa a las personas en el centro del proceso, como beneficiarias del desarrollo y agentes del progreso y la transformación.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema4/slide4.png', alt='Enfoque de desarrollo humano')


    .tarjeta.bg-3 
      .row.justify-content-evenly.align-items-center.p-3.p-md-2
        .col-md-2.col-6
          img.p-4.px-md-5(src='@/assets/curso/temas/tema4/ico4.svg', alt='Icono decorativo')
        .col-md-10.text-white
          p.mb-0 Es importante recordar que 
            b.t-pink frente a las personas con discapacidad no se puede suponer ni generalizar. 
            | Es primordial preguntar directamente a la persona con discapacidad acerca de sus necesidades frente al servicio o tarea que se dispone a realizar y sobre los apoyos o facilitadores que requiere para su acceso al mismo. Preguntar si requieren apoyo, se respeta su voluntad y autonomía, y favorece su independencia.




</template>

<script>
export default {
  name: 'Tema4',
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

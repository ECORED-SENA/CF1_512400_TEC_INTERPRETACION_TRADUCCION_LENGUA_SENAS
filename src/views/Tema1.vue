<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Logística del servicio 


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 La gestión del servicio de traducción e interpretación en 
          b.t-blue lengua de señas, 
          | se realiza en diversos escenarios o contextos, los cuales requieren personal con habilidades de comunicación en las dos lenguas involucradas, lenguas de señas colombiana LSC y español, como también habilidades en la administración del trabajo, conocimientos técnicos, profesionales, contextuales y económicos.

    .row.align-items-center.mb-5
      .col-md-9(data-aos="fade-right")
        .cajon.color-primario.mb-4
          .row.justify-content-center.align-items-center.p-3.p-md-0
            .col-md-2.col-6.mb-2.mb-md-0
              img.p-md-4(src='@/assets/curso/temas/tema1/ico.svg', alt='Icono decorativo')
            .col-md-10
              p.mb-0 La logística, cuando se ofrece el servicio de interpretación, requiere de una planeación que considere la magnitud del evento y los imprevistos que puedan ocurrir en la prestación del servicio.
        p Más allá de los inventarios tangibles y cuantificables, se encuentra una logística enfocada a la capacidad de gestión, lo que incluye la calidad de los servicios prestados y la satisfacción del cliente. Esto es lo que se conoce como 
          b.t-blue “logística de servicio”.
        p Considerando lo anterior, es importante reconocer la diferencia entre la logística de productos y la logística de servicios.
      .col-md-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tarj1-ico1.svg' alt='Uno')
          .tarjeta.tema1
            .text-center.p-4.px-md-5.pb-md-5
              h4 Logística de productos
              p Este tipo de logística se relaciona con procesos acumulables, cuantificables y transportables.
      .col-md-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tarj1-ico2.svg' alt='Dos')
          .tarjeta.tema1
            .text-center.p-4.px-md-5.pb-md-5
              h4 Logística de servicios
              p Hace referencia al cliente y se enfoca en trabajar en pro de su satisfacción.

    p(data-aos="fade") Teniendo claras las anteriores definiciones, se puede decir que el servicio al cliente puede ser analizado desde tres puntos de vista diferentes, los cuales se presentan a continuación.

    .row.fondo-tema1.align-items-center.py-4.py-md-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

          .col-md-12
            .subt-boc.mb-4(data-aos="fade")
              h4.text-white.mb-0 Niveles de servicio

          .col-md-9.mb-5.mb-md-0
            ImagenInfografica.tema1.color-acento-botones
              template(v-slot:imagen)
                figure.d-md-block.d-none
                  img(src='@/assets/curso/temas/tema1/img-pc-infog1.svg', alt='Niveles de servicio')
                figure.d-md-none
                  img(src='@/assets/curso/temas/tema1/img-mob-infog1.svg', alt='Niveles de servicio')  

              .tarjeta.bg-6.box-shadow.p-3(x="58%" y="35%" numero="+")
                .h4.mb-2 Nivel de servicio ofrecido
                p.mb-0 Es la oferta que determina la organización de acuerdo con sus recursos tecnológicos, administrativos y económicos, es lo que la empresa promete al cliente.
              .tarjeta.bg-6.box-shadow.p-3(x="72%" y="52.5%" numero="+")
                .h4.mb-2 Nivel de servicio proporcionado
                p.mb-0 Es el servicio que la organización presta realmente a sus clientes, es decir, es la puesta en marcha de la oferta inicial propuesta.
              .tarjeta.bg-6.box-shadow.p-3(x="25.5%" y="59.5%" numero="+")
                .h4.mb-2 Nivel de servicio percibido
                p.mb-0 Es el servicio que aspira o desea recibir el cliente; los clientes siempre tienen ciertas expectativas sobre lo que van a recibir, a veces estas logran ser satisfechas, lo que lleva a fidelizar al cliente, pero en ocasiones el servicio no cumple con lo esperado.

          .col-md-9
            .tarjeta.box-shadow.bg-7.text-center.p-4.px-md-5
              p.mb-0 La prestación de servicios busca eliminar la brecha entre el nivel de 
                b.t-red servicio ofrecido 
                | y el nivel de 
                b.t-red servicio percibido 
                | en cada uno de sus componentes: calidad, variedad, costo, tiempo de respuesta, disponibilidad. Para lograr esto, es necesario conocer el contexto de las necesidades y gustos de los clientes, para el perfeccionamiento continuo del sistema de gestión logística.


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Etapas o fases

    p(data-aos="fade") Para que un servicio de interpretación pueda aplicarse eficazmente, primero es necesario conocer el marco normativo que regula esta función y la definición que de esta se tiene: 
      b.t-red “Intérprete para Sordos” 
      | son personas con amplios conocimientos de 
      b.t-red la Lengua Manual Colombiana (LMC) o Lengua de Señas Colombiana (LSC), 
      | que puede realizar interpretación simultánea del español hablado en la Lengua Manual Colombiana y viceversa. De acuerdo con la Sentencia C-128-02 y la Ley 324 de 1996, “también son intérpretes para sordos aquellas personas que realicen la interpretación simultánea del castellano hablado a otras formas de comunicación de la población sorda, distintas a la LMC, y viceversa”.

    p(data-aos="fade") Es importante que, dentro de las etapas de interpretación, se cumpla con algunas etapas de la logística, se invita a conocerlas revisando con atención el siguiente material:

    .row.fondo-tema1-2.align-items-center.py-4.py-md-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .col-md-12.d-flex.justify-content-center.mb-1
            .subt-boc.mb-4(data-aos="fade")
              h4.text-white.mb-0 Etapas de la logística

          .col-md-12.mb-5(data-aos="fade-down")
            figure.d-md-block.d-none
              img.mx-auto(src='@/assets/curso/temas/tema1/pc-fig1.svg' alt='Etapas de la logística')
            figure.d-md-none
              img.mx-auto(src='@/assets/curso/temas/tema1/mob-fig1.svg' alt='Etapas de la logística')

          .col-md-10(data-aos="fade")
            .cajon.color-acento-contenido
              .row.justify-content-evenly.align-items-center.p-3
                .col-md-2.col-6
                  img.p-4(src='@/assets/curso/temas/tema1/ico2.svg', alt='Icono decorativo')
                .col-md-10
                  p.mb-0 “El Estado garantizará y proveerá la ayuda de intérpretes idóneos para que sea este un medio a través del cual las personas sordas puedan acceder a todos los servicios que como ciudadanos colombianos les confiere la Constitución. Para ello el Estado organizará a través de entes oficiales o por convenios con asociaciones de sordos, la presencia de intérpretes para el acceso a los servicios mencionados” Ley 324 (1996).


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Criterios

    p.mb-4(data-aos="fade") Los criterios en el proceso logístico permiten identificar el grado de satisfacción del cliente, estos abarcan:  

    .row.fondo-tema1-3.align-items-center.py-4.py-md-4.mb-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          .col-md-12.justify-content-center
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.] Criterios en el proceso logístico

          .col-md-11(data-aos="fade-down")
            figure.d-md-block.d-none
              img.mx-auto(src='@/assets/curso/temas/tema1/pc-fig2.svg' alt='Criterios en el proceso logístico')
            figure.d-md-none
              img.mx-auto(src='@/assets/curso/temas/tema1/mob-fig2.svg' alt='Criterios en el proceso logístico')


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Costos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img3.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Son la suma de aquellos costos ocultos que se ocasionan durante la prestación del servicio de interpretación. Por ejemplo, un costo oculto es el alquiler de luces específicamente para visibilizar al intérprete, dado que la estética del evento propone una luz tenue que no beneficia al servicio de interpretación. Teniendo en cuenta los parámetros estratégicos de costos logísticos, son varios los costos que conlleva un servicio de interpretación: costos variables, costos individualizados, nivel de calidad, subsistemas relacionados, costo total, entre otros.


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Objetivos

    p(data-aos="fade") En el momento de prestar el servicio de interpretación, es fundamental trazar unos objetivos claros, por ende, es importante analizar el contexto donde se llevará a cabo el servicio y a partir de allí dar respuesta a preguntas como ¿por qué?, ¿qué? y ¿a quién?, esto permitirá tener una visión general y realizar una planeación más detallada del proceso. En el siguiente material se profundiza en este aspecto:

    .row.fondo-tema1-4.align-items-center.py-4.py-md-5.mb-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

          .col-md-12
            .subt-boc.mb-4(data-aos="fade")
              h4.text-white.mb-0 Análisis del contexto del servicio

          .col-md-8.mb-5.mb-md-0
            ImagenInfografica.tema1-2.color-acento-botones
              template(v-slot:imagen)
                figure.d-md-block.d-none
                  img(src='@/assets/curso/temas/tema1/img-pc-infog2.svg', alt='Análisis del contexto del servicio')
                figure.d-md-none
                  img(src='@/assets/curso/temas/tema1/img-mob-infog2.svg', alt='Análisis del contexto del servicio')  

              .tarjeta.bg-8.box-shadow.p-3(x="15.5%" y="42%" numero="+")
                .h4.mb-2 ¿Por qué?
                p.mb-0 Obedece a los objetivos del servicio de interpretación, es decir, incrementar las capacidades de comprensión y competencia en el mercado, lograr la permanencia de los clientes y generar una mayor rentabilidad económica como resultado de los servicios ofrecidos.
              .tarjeta.bg-8.box-shadow.p-3(x="57.5%" y="47%" numero="+")
                .h4.mb-2 ¿A quién?
                p.mb-0 Hace referencia al análisis de los destinatarios, es decir, la persona, grupo de personas o la entidad a quién va dirigido el servicio de interpretación, con sus particularidades individuales. Quien realiza el servicio deduce la manera más apropiada para intervenir.
              .tarjeta.bg-8.box-shadow.p-3(x="84.5%" y="40%" numero="+")
                .h4.mb-2 ¿Qué?
                p.mb-2 Es el análisis del recurso que considera los diferentes componentes que intervienen en el servicio que se presta, por ejemplo: 
                ul.lista-ul
                  li.mb-0 
                    i.lista-ul__vineta
                    | Tecnológicos. 
                  li.mb-0 
                    i.lista-ul__vineta
                    | Locativos.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Económicos.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Materiales.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Organizativos.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Educativos.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Humanos.


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Medios y servicios

    p.mb-4(data-aos="fade") En esta parte del proceso se debe contar con la capacidad para responder a las siguientes preguntas:

    .row.justify-content-evenly.align-items-center.mb-5
      .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imagen decorativa')
      .col-md-7(data-aos="fade-left")
        .row.justify-content-between.mx-md-2.mx-4
          .col-md-4.mb-4.px-xl-4.px-md-4
            .row.bg-3.align-items-center.b-radius.p-lg-3
              .col-4.px-4.py-2.col-md-4.p-md-1.col-xl-5.px-xl-3.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/ico3.svg', alt='Icono decorativo')
              .col-8.col-md-7.px-0.text-center
                h4.text-white.mb-0 ¿Cómo?
          .col-md-4.mb-4.px-xl-4.px-md-4
            .row.bg-3.align-items-center.b-radius.p-lg-3
              .col-4.px-4.py-2.col-md-4.p-md-1.col-xl-5.px-xl-3.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/ico3.svg', alt='Icono decorativo')
              .col-8.col-md-7.px-0.text-center
                h4.text-white.mb-0 ¿Cuándo?
          .col-md-4.mb-4.px-xl-4.px-md-4
            .row.bg-3.align-items-center.b-radius.p-lg-3
              .col-4.px-4.py-2.col-md-4.p-md-1.col-xl-5.px-xl-3.mb-3.mb-md-0
                img(src='@/assets/curso/temas/tema1/ico3.svg', alt='Icono decorativo')
              .col-8.col-md-7.px-0.text-center
                h4.text-white.mb-0 ¿Dónde?
        p De esta manera, se tendrán claros los medios y servicios para la interpretación, entre los que se deben tener en cuenta la presentación personal, la ubicación, el estado emocional del intérprete y el uso de plataformas tecnológicas como medios alternos para prestar dicho servicio.
        p Otro de los aspectos primordiales que permite establecer procesos de mejoramiento es la 
          b.t-blue Evaluación de los servicios - ¿Cómo se evaluará?
        p 
          b.t-blue La evaluación de la calidad del servicio 
          | permite conocer la opinión de los usuarios sobre las particularidades del trabajo realizado que contribuyen a su plena satisfacción. Existen algunos elementos que los consumidores tienen en cuenta para la evaluación, como son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/tarj-slide1.svg' alt='Elementos tangibles')
        .tarjeta.bg-4.box-shadow
          .text-center.p-4
            h4 Elementos tangibles
            p La apariencia del intérprete, su presentación personal.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/tarj-slide2.svg' alt='Cumplimiento')
        .tarjeta.bg-4.box-shadow
          .text-center.p-4
            h4 Cumplimiento
            p Llegar a la hora pactada, cumplir con los términos del contrato y desarrollar el servicio de manera correcta y oportuna.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/tarj-slide3.svg' alt='Disposición')
        .tarjeta.bg-4.box-shadow
          .text-center.p-4
            h4 Disposición
            p Tener la disposición para aclarar dudas, atender las necesidades del cliente y ofrecer el servicio de manera ágil y clara.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/tarj-slide4.svg' alt='Perfil del personal')
        .tarjeta.bg-4.box-shadow
          .text-center.p-4
            h4 Perfil del personal
            p Dominar muy bien el lenguaje de señas, además de prepararse sobre el tema de la exposición, debe contar con la capacidad para solucionar los contratiempos e inspirar confianza.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/tarj-slide5.svg' alt='Empatía')
        .tarjeta.bg-4.box-shadow
          .text-center.p-4
            h4 Empatía
            p Participar en la realidad del cliente de forma objetiva y racional.

    .row.mb-5(data-aos="fade")
      .col-md-1
        img(src='@/assets/curso/temas/tema1/ico4.svg', alt='Icono decorativo')
      .col-md-11
        p Evaluar las políticas de servicio facilita definir estándares, perfiles y protocolos de atención, esto permite corresponder de manera eficaz y eficiente a lo que se está ofertando y a lo que se está demandando.
        p Tener claras las políticas de servicio en este campo profesional, indica que los procedimientos e instructivos deben estar documentados y responder al paso a paso de lo que debe hacer el intérprete al momento de interactuar con sus usuarios, recibir una indicación de su coordinador, atender a una observación del intérprete de apoyo y cualquier otra particularidad propia del ejercicio de interpretación.
      .px-md-2
        .cajon.color-acento-contenido
          .row.justify-content-evenly.align-items-center.p-3.p-md-4
            .col-md-10
              p.mb-0 Al tener establecida una política de servicio, como en todo proceso, es fundamental hacer una evaluación periódica que permita recoger fortalezas de lo que se está haciendo, pero en especial, aspectos que son sujetos de mejora y que daría valor agregado en cuanto se superen.
            .col-md-1.col-6.px-1
              img(src='@/assets/curso/temas/tema1/ico5.svg', alt='Icono decorativo')
            


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Planificación y producción

    p.mb-4(data-aos="fade") Después de tener claro el por qué, qué, a quién, cómo, cuándo y dónde, es necesario aplicar los procesos logísticos de acuerdo con el contexto y el usuario; se invita a conocer los aspectos que se deben tener en cuenta durante este paso:

    figure.d-md-block.d-none.mb-5
      img.mx-auto(src='@/assets/curso/temas/tema1/pc-fig3.svg' alt='Procesos Logísticos')
    figure.d-md-none.mb-5
      img.mx-auto(src='@/assets/curso/temas/tema1/mob-fig3.svg' alt='Procesos Logísticos')


    .subt-3er.mb-5(data-aos="fade")
      h3.text-white.mb-0 Logística del servicio de interpretación

    p(data-aos="fade") Entender y esquematizar los conceptos relacionados con la organización de un evento en el que se presta un servicio de interpretación, aportará mayor claridad al desarrollo del mismo y respecto a los roles que cumplen los participantes, en los que se incluyen: 
      b.t-blue el coordinador, los intérpretes activos y los intérpretes de apoyo. 

    p.mb-4(data-aos="fade") Para ello se requiere una adecuada programación logística que permita alcanzar el objetivo de servicio; aquí se exponen los aspectos que se deben contemplar al respecto:

    .tarjeta.bg-slider.p-4.pt-md-5.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-4.py-4
            p Todo evento en el que se solicite interpretación de lengua de señas y que dure más de una hora, requiere como mínimo un intérprete de relevo para hacer los respectivos cambios cada veinte minutos.
          .col-md-7
            img(src='@/assets/curso/temas/tema1/slide1.png', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-4.py-4
            p Los intérpretes establecerán previamente aspectos organizacionales como la metodología que se utilizará en la interpretación, el uso de los medios visuales y una ubicación estratégica del intérprete pasivo que permita apoyar al intérprete activo en los datos que se puedan pasar por alto.
          .col-md-7
            img(src='@/assets/curso/temas/tema1/slide2.png', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-4.py-4
            p Pasados veinte minutos, el intérprete de relevo se pondrá detrás del intérprete activo evitando ser un distractor y hará un corto y sutil toque en el hombro, para que este finalice la idea que está transmitiendo y así cambiar el rol, o podrían aprovechar el cambio si el expositor hace una pausa.
          .col-md-7
            img(src='@/assets/curso/temas/tema1/slide3.png', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-4.py-4
            p El intérprete de apoyo debe estar atento a los datos que exigen atención más detallada de lo normal, como las fechas, los números, nombres con apellidos, cuando el intérprete activo no recuerda una seña o no la sabe, o cuando el intérprete activo tiene necesidad de finalizar antes de tiempo su intervención.
          .col-md-7
            img(src='@/assets/curso/temas/tema1/slide4.png', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-4.py-4
            p El intérprete de apoyo es, también, en la mayoría de los casos, el intérprete de relevo; y lo que hace que esté en completa conexión con la información que se está interpretando, pues debe darle continuidad al tema atinadamente con el hilo conductor de la información, sin perder la idea del mensaje.
          .col-md-7
            img(src='@/assets/curso/temas/tema1/slide5.png', alt='Imagen decorativa')





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

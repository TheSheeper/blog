import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Impacto del uso de las redes sociales en el bienestar mental.
          </h1>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-2xl">Introducción.</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-16">
              <article className="space-y-4 text-gray-400">
                <p>
                  El auge de los teléfonos inteligentes y su acceso a Internet
                  ha llevado a preocupaciones sobre el aislamiento social, ya
                  que muchos jóvenes pasan mucho tiempo en sus dispositivos
                  navegando por redes sociales en lugar de interactuar con
                  amigos y familiares. Este problema es frecuente en la sociedad
                  actual. Esta adicción a las redes sociales puede convertirse
                  en un problema cada vez más complicado de abordar en el
                  futuro. Es importante recordar que las redes sociales son
                  herramientas para mantener el contacto con seres queridos y
                  conocer personas nuevas a través de Internet, pero los jóvenes
                  a menudo abusan de su uso, convirtiéndolo en una adicción y
                  generando problemas relacionados.
                </p>
              </article>
            </div>

            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt="Party"
                src="/img_grafica_1.png"
                width={1000}
                height={1000}
                className=" inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:py-16">
            <div className="max-w-3xl py-4">
              <h2 className="text-3xl font-bold sm:text-2xl">
                Definición del problema
              </h2>
            </div>

            <article className="space-y-4 text-gray-400">
              <p>
                En la actualidad, las nuevas generaciones, criadas con las
                nuevas tecnologías, utilizan estas herramientas con mayor
                frecuencia que sus predecesores. Este aumento en el uso de las
                tecnologías ha facilitado la comunicación a través de las redes
                sociales. Sin embargo, se plantea la interrogante sobre si el
                uso excesivo de las redes sociales puede dar lugar a problemas
                psicológicos, como la depresión y la ansiedad, debido a la falta
                de límites y una educación adecuada sobre su uso.
              </p>
            </article>
          </div>

          <section class=" text-white">
            <div class="max-w-screen-xl  sm:py-6  lg:py-16 ">
              <div class="">
                <h2 class="text-2xl font-bold sm:text-2xl">Objetivos</h2>

                <p class="mt-4 text-gray-400">
                  Evaluar y dar a conocer el impacto psicológico que las redes
                  sociales tienen sobre los jóvenes que cuentan con una adicción
                </p>
              </div>

              <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      Analizar el impacto psicológico que tienen las redes
                      sociales en jovenes con dependencia a estas
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      Generar un blog digital con el cual se darán a conocer los
                      resultados obtenidos durante la investigación
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      Ayudar a mejorar el uso de las redes sociales para evitar
                      caer en problemas de depresión o ansiedad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class=" text-white">
            <div class="max-w-screen-xl  sm:py-6  lg:py-16 ">
              <div class="">
                <h2 class="text-2xl font-bold sm:text-2xl">
                  Preguntas de investigación
                </h2>

                <p class="mt-4 text-gray-400">
                  Evaluar y dar a conocer el impacto psicológico que las redes
                  sociales tienen sobre los jóvenes que cuentan con una adicción
                </p>
              </div>

              <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      Analizar el impacto psicológico que tienen las redes
                      sociales en jovenes con dependencia a estas
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      Generar un blog digital con el cual se darán a conocer los
                      resultados obtenidos durante la investigación
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      Ayudar a mejorar el uso de las redes sociales para evitar
                      caer en problemas de depresión o ansiedad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class=" text-white">
            <div class="max-w-screen-xl  sm:py-6  lg:py-16 ">
              <div class="">
                <h2 class="text-2xl font-bold sm:text-2xl">Hipótesis</h2>

                <p class="mt-4 text-gray-400">
                  Los jóvenes con uso constante de redes sociales generan una
                  adicción a éstas y son propensos a desarrollar depresión o
                  ansiedad.
                </p>
              </div>

              <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      La adicción a las redes sociales en jóvenes puede
                      manifestarse como una disminución de la interacción social
                      cara a cara y la alteración del bienestar emocional
                      general.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      El constante monitoreo de las redes sociales y la
                      comparación social pueden aumentar la preocupación y el
                      estrés en los individuos.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <p class="mt-1 text-sm text-gray-300">
                      La limitación de las redes sociales en personas jóvenes
                      puede influir a que no tengan una dependencia y generen
                      conciencia acerca de la gravedad que tiene usar las redes
                      sociales de forma excesiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="lg:py-16">
            <div className="max-w-3xl py-4">
              <h2 className="text-3xl font-bold sm:text-2xl">
                Justificación y viabilidad
              </h2>
            </div>

            <article className="space-y-4 text-gray-400">
              <p>
                La depresión y el aislamiento social no son nada nuevo ni nada
                exclusivo de este siglo, sin embargo, el mayor detonante en los
                últimos años si, estas son las redes sociales. Al realizar esta
                investigación se comprobará bajo qué circunstancias un individuo
                puede tener graves problemas por el uso extenso de las redes
                sociales y cuando es considerado un uso excesivo en una sociedad
                donde dependen de las redes sociales para poder funcionar, así
                como el manejo correcto y responsable de las redes sociales. Una
                de las mayores diferencias en la vida de los adolescentes y
                adultos jóvenes actuales, en comparación con las generaciones
                anteriores, es que pasan mucho menos tiempo conectándose con sus
                compañeros en persona y más tiempo conectándose de manera
                electrónica, principalmente a través de las redes sociales.
              </p>
              <p>
                Este proyecto es viable, considerando el tiempo que se tardará
                en recabar toda la información, también que no será un proyecto
                muy costoso y beneficiará a muchas personas, especialmente
                aquellas que cuenten ya con una adicción y servirá de igual
                manera para prevenir que otras personas, quienes vayan iniciando
                dentro del mundo de las redes sociales, no se adentren en malos
                hábitos y sepan cómo prevenir una posible adicción.
              </p>
            </article>
          </div>

          <div className="lg:py-16">
            <div className="max-w-3xl py-4">
              <h2 className="text-3xl font-bold sm:text-2xl">Marco teórico</h2>
            </div>

            <article className="space-y-4 text-gray-400">
              <p>
                Las redes sociales iniciaron en 1990, gracias a que el internet
                era una herramienta más disponible al alcance de las personas. A
                lo largo de los años el internet se masificó, siendo así que una
                gran mayoría en algún momento hemos requerido de este recurso, a
                la vez que las redes sociales han hecho que una parte de la
                población joven sea perteneciente a alguna de estas, provocando
                en los últimos años una adicción por malos hábitos al
                utilizarlas. Una adicción, como bien se sabe, es mala para
                cualquier individuo, ya que les impide a las personas vivir una
                vida plena sin el recurso al que son adictos, por lo que muchas
                veces pueden generar trastornos.
              </p>
              <p>
                Las redes sociales son una gran herramienta para el ser humano
                moderno, pueden ser una fuente de ingreso o nos pueden mantener
                informados de los más recientes acontecimientos a nivel global,
                sin embargo, un uso excesivo de estas herramientas pueden llegar
                a provocar una adicción, la cual llega a ser mala en cualquier
                ámbito, ya que una adicción no se priva únicamente a sustancias
                ilícitas, sino a cualquier actividad que provoque alguna
                satisfacción y que se haga uso excesivo de ella.
              </p>
              <p>
                Las redes sociales no son la excepción, y quienes son más
                propensos a desarrollar una adicción a las redes sociales son
                los niños, adolescentes y adultos jóvenes por el hecho de que se
                encuentran en una edad donde es fácil que sean manipulados o se
                dejen llevar por nuevas experiencias, por lo que es pertinente
                promover un uso sano y responsable de las redes sociales para
                que los usuarios no prefieran la comunicación por internet y
                prefieran la comunicación física, la cual es más saludable pues
                el ser humano es un ser sociable por naturaleza.
              </p>
              <p>
                Aun así, hay que comprender que las redes sociales no son el
                causante de todos los problemas mencionados en esta
                investigación, si no un agraviante. Si una persona sufre de
                depresión no basta con privarlo del uso de redes sociales, si no
                brindarle apoyo y ayuda de preferencia profesional en caso de
                que se requiera, pues los trastornos abordados en esta
                investigación pueden ser ocasionados por vivencias individuales
                de cada persona.
              </p>
            </article>
          </div>

          <div className="lg:py-16">
            <div className="max-w-3xl py-4">
              <h2 className="text-3xl font-bold sm:text-2xl">Investigación</h2>
            </div>

            <article className="space-y-4 text-gray-400">
              <p>
                Llevamos a cabo una investigación de campo, ya que es esencial
                obtener información directa de las fuentes principales. Esta
                investigación se centrará en aspectos cualitativos,
                permitiéndonos analizar detenidamente las respuestas y detectar
                patrones clave que nos ayudarán a llegar a conclusiones sólidas
                en línea con los objetivos de nuestra investigación.
              </p>
              <p>
                La información a investigar fue proporcionada por los jóvenes,
                los cuales responderán preguntas acerca de su interacción social
                con su entorno y de su uso de las redes sociales. Dentro de esta
                información se consideran datos que nos ayudarán a saber si se
                tienen problemas de adicción con las redes sociales y si alguno
                de los jóvenes sufre de problemas como depresión, ansiedad y
                problemas de comunicación con su entorno social, con esta
                información ya se podrá definir con mayor claridad el patrón de
                uso de las redes sociales con el aumento de estos problemas que
                afectan a toda la sociedad.
              </p>
              <p>
                El universo que contemplamos fue de 300 jóvenes de entre 15 y 24
                años que utilizan redes sociales. Esto podría incluir a todos
                los jóvenes en una región geográfica específica, con propósitos
                de esta investigación la población será sobre jóvenes de
                Saltillo, Coahuila. Dado que es impracticable encuestar a todos
                los jóvenes de 15 a 24 años que utilizan redes sociales. Se
                encuestaron aleatoriamente a 40 jóvenes de diferentes edades
                dentro de este rango en la ciudad de Saltillo, Coahuila.
              </p>
              <p>
                El proceso fue llevado a cabo mediante encuestas realizadas por
                los integrantes del equipo de investigación. En este proyecto de
                investigación, las encuestas serán utilizadas como método
                principal para recopilar datos y obtener información sobre las
                opiniones, actitudes y percepciones de la población objetivo con
                respecto al tema de estudio: "Impacto del uso de las redes
                sociales en el bienestar mental".
              </p>
            </article>
          </div>

          <div className="lg:py-16">
            <div className="max-w-3xl py-4">
              <h2 className="text-3xl font-bold sm:text-2xl">
                Resultados de la investigación
              </h2>
            </div>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base">Objetivos</h3>
              </div>
              <p>
                El objetivo general de la investigación era evaluar y dar a
                conocer el impacto psicológico que las redes sociales tienen
                sobre los jóvenes que cuentan con una adicción. A través de la
                recopilación y análisis de datos se logró cumplir este objetivo
                al identificar patrones consistentes que revelan la relación
                entre el uso constante de las redes sociales y la adicción, así
                como sus consecuencias psicológicas.
              </p>
              <p>
                Se logró analizar el impacto psicológico que tienen las redes
                sociales en jóvenes con dependencia a estas. Los resultados
                indican que existe una correlación significativa entre el uso
                excesivo de las redes sociales y la disminución de la
                interacción social cara a cara, así como la alteración del
                bienestar emocional general.
              </p>
              <p>
                El objetivo de generar un blog digital con los resultados
                obtenidos durante la investigación se cumplió con éxito. Este
                recurso se ha creado para difundir de manera amplia y accesible
                la información relevante, brindando a la sociedad herramientas
                para comprender y abordar los problemas derivados del uso
                excesivo de las redes sociales.
              </p>
              <p>
                La investigación proporcionó información valiosa para ayudar a
                mejorar el uso de las redes sociales y prevenir problemas de
                depresión o ansiedad. Se identificaron áreas específicas donde
                los jóvenes pueden tomar medidas para proteger su bienestar
                psicológico al utilizar estas plataformas.
              </p>
            </article>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base p-0">
                  Hipotesis
                </h3>
              </div>
              <p>
                La hipótesis general, que afirmaba, que los jóvenes con uso
                constante de redes sociales generan una adicción y son propensos
                a desarrollar depresión o ansiedad, se confirmó con base en los
                resultados de las preguntas de investigación.
              </p>
              <p>
                Todas las hipótesis específicas fueron respaldadas por los datos
                obtenidos. La adicción a las redes sociales se manifestó en la
                disminución de la interacción social cara a cara, la alteración
                del bienestar emocional, el aumento de la preocupación y el
                estrés y la falta de conciencia sobre la gravedad del uso
                excesivo de estas plataformas.
              </p>
            </article>
          </div>

          <div className="lg:py-16">
            <div className="max-w-3xl py-4">
              <h2 className="text-3xl font-bold sm:text-2xl">
                Recomendaciones
              </h2>
            </div>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base">
                  Programas educativos
                </h3>
              </div>
              <p>
                Se recomienda la implementación de programas educativos en
                instituciones educativas que aborden específicamente el uso
                responsable de las redes sociales. Estos programas deben
                centrarse en la concientización sobre los riesgos psicológicos
                asociados con el uso excesivo y proporcionar estrategias para un
                uso equilibrado.
              </p>
            </article>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base p-0">
                  Participación de padres
                </h3>
              </div>
              <p>
                Es crucial fomentar la participación activa de los padres en la
                educación de sus hijos sobre el uso adecuado de las redes
                sociales. Se sugiere la realización de talleres y charlas
                informativas para los padres, brindándoles herramientas para
                supervisar y guiar el comportamiento en línea de sus hijos.
              </p>
            </article>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base p-0">
                  Desarrollo de Contenido Positivo
                </h3>
              </div>
              <p>
                Se insta a las plataformas de redes sociales a promover
                activamente el desarrollo y la difusión de contenido positivo,
                Esto incluye campañas que fomenten la empatía, la solidaridad y
                la autoestima positiva, contrarrestando así los efectos
                negativos del contenido perjudicial.
              </p>
            </article>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base p-0">
                  Servicios de Apoyo Psicológico
                </h3>
              </div>
              <p>
                Se recomienda establecer servicios de apoyo psicológico
                accesibles a través de las redes sociales. Estos servicios
                pueden incluir líneas de ayuda, recursos en línea y
                asesoramiento profesional para aquellos que experimentan
                problemas de salud mental relacionados con el uso de estas
                plataformas.
              </p>
            </article>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base p-0">
                  Exploración de Contenido Específico
                </h3>
              </div>
              <p>
                Se sugiere realizar investigaciones más detalladas sobre el
                impacto psicológico de tipos específicos de contenido en las
                redes sociales. Comprender cómo diferentes tipos de
                publicaciones afectan la salud mental permitirá una intervención
                más precisa.
              </p>
            </article>

            <article className="space-y-4 text-gray-400">
              <div className="max-w-3xl py-4">
                <h3 className="text-3xl font-bold sm:text-base p-0">
                  Estudios Longitudinales
                </h3>
              </div>
              <p>
                Para obtener una comprensión más completa de la evolución de los
                patrones de uso y sus efectos, se recomienda la realización de
                estudios longitudinales. Estos estudios podrían seguir a los
                participantes a lo largo del tiempo para identificar cambios a
                largo plazo en su bienestar psicológico.
              </p>
            </article>
          </div>

          <div className="lg:py-16">
            <div className="max-w-3xl py-4">
              <h2 className="text-3xl font-bold sm:text-2xl">Conclusiones</h2>
            </div>

            <article className="space-y-4 text-gray-400">
              <p>
                En resumen, las recomendaciones presentadas en este capítulo
                buscan abordar las problemáticas identificadas en la
                investigación y promover un uso saludable de las redes sociales
                entre jóvenes. La implementación de estas sugerencias
                contribuirá a mitigar los riesgos psicológicos asociados con el
                uso excesivo de estas plataformas, fomentando un entorno en
                línea más positivo y beneficioso para la salud mental de la
                población juvenil.
              </p>
              <p>
                A su vez, sta investigación proporciona una visión integral del
                impacto psicológico del uso excesivo de las redes sociales en
                jóvenes. Los hallazgos subrayan la necesidad de abordar este
                problema de manera proactiva, implementando estrategias
                educativas y de apoyo para promover un uso saludable de estas
                plataformas en la sociedad actual.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

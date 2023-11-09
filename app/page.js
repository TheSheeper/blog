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
                <h2 class="text-2xl font-bold sm:text-2xl">
                  Objetivos
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
        </div>
      </section>
    </main>
  );
}

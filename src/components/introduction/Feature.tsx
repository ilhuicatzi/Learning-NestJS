import { Button } from "@/components/ui/button";
import { useState } from "react";

function Feature() {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Características de NestJS</h2>
        <p>
          <span className="text-primary font-semibold">NestJS</span> es un marco
          de servidor de{" "}
          <span className="text-primary font-semibold">Node.js</span> que
          proporciona una arquitectura limpia y modular para crear aplicaciones
          escalables y eficientes. Algunas de las características más destacadas
          de <span className="text-primary font-semibold">NestJS</span> son:
        </p>
        <ul
          className={`list-disc list-inside space-y-2 px-4 ${
            readMore ? "block" : "hidden"
          }`}
        >
          <li>
            <span className="text-primary font-semibold">
              Arquitectura modular
            </span>
            : NestJS proporciona una arquitectura modular que facilita la
            organización de la aplicación en módulos reutilizables.
          </li>
          <li>
            <span className="text-primary font-semibold">
              Inyección de dependencias
            </span>
            : NestJS utiliza la inyección de dependencias para gestionar las
            dependencias de los componentes de la aplicación.
          </li>
          <li>
            <span className="text-primary font-semibold">Decoradores</span>:
            NestJS utiliza decoradores para definir los componentes de la
            aplicación, como los controladores y los servicios.
          </li>
          <li>
            <span className="text-primary font-semibold">Middlewares</span>:
            NestJS proporciona una forma sencilla de definir middlewares para
            gestionar las peticiones HTTP.
          </li>
          <li>
            <span className="text-primary font-semibold">Interceptores</span>:
            NestJS permite definir interceptores para modificar las peticiones y
            respuestas HTTP.
          </li>
          <li>
            <span className="text-primary font-semibold">Pipes</span>: NestJS
            proporciona pipes para validar y transformar los datos de entrada de
            las peticiones HTTP.
          </li>
          <li>
            <span className="text-primary font-semibold">Guards</span>: NestJS
            permite definir guards para proteger las rutas de la aplicación
            mediante la autenticación y la autorización.
          </li>
          <li>
            <span className="text-primary font-semibold">Filtros</span>: NestJS
            proporciona filtros para gestionar las excepciones y errores de la
            aplicación.
          </li>
          <li>
            <span className="text-primary font-semibold">Websockets</span>:
            NestJS proporciona soporte para websockets para crear aplicaciones
            en tiempo real.
          </li>
          <li>
            <span className="text-primary font-semibold">Testing</span>: NestJS
            proporciona herramientas para realizar pruebas unitarias e
            integradas de la aplicación.
          </li>
        </ul>
        <Button
          onClick={() => setReadMore(!readMore)}
          className="px-0 font-bold"
          variant="link"
        >
          {readMore ? "Leer menos" : "Leer más"}
        </Button>
      </section>
  )
}

export default Feature
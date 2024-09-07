import CodeString from "@/components/code/CodeString";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";
import Markdown from "react-markdown";

function IntroductionPage() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="grid space-y-16 px-20 w-full max-w-4xl">
      <section className="mt-8 space-y-4">
        <h1 className="text-4xl font-bold">Introducciona a Nest js</h1>
        <p>
          Nest (<span className="text-primary font-semibold"> NestJS </span>) es
          un marco para crear aplicaciones escalables y eficientes del lado del
          servidor en{" "}
          <span className="text-primary font-semibold">Node.js</span>. Utiliza
          JavaScript progresivo, está creado con{" "}
          <span className="text-primary font-semibold">TypeScript</span> y es
          totalmente compatible con él (pero permite a los desarrolladores
          codificar en JavaScript puro) y combina elementos de{" "}
          <strong>OOP</strong> (programación orientada a objetos),{" "}
          <strong>FP</strong> (programación funcional) y <strong>FRP</strong>{" "}
          (programación reactiva funcional).
        </p>
        <p>
          Bajo el capó, Nest hace uso de robustos marcos de servidor HTTP como{" "}
          <span className="text-primary font-semibold">Express</span> (el
          predeterminado) y, opcionalmente, puede configurarse para usar{" "}
          <span className="text-primary font-semibold">Fastify</span> también.
        </p>

        <p>
          Nest ofrece un nivel de abstracción superior al de los frameworks
          Node.js habituales (Express/Fastify), pero también expone sus{" "}
          <strong>API</strong> directamente al desarrollador. Esto les da la
          libertad de usar la gran cantidad de módulos de terceros que están
          disponibles para la plataforma subyacente.
        </p>
      </section>
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
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Instalación de NestJS</h2>
        <p>
          Para instalar{" "}
          <span className="text-primary font-semibold">NestJS</span> en tu
          máquina local, necesitas tener instalado Node.js y npm. Puedes
          instalar NestJS utilizando el CLI de NestJS, que proporciona una forma
          sencilla de crear y gestionar proyectos de NestJS.
        </p>
        <p>
          Para instalar el CLI de NestJS, puedes utilizar el siguiente comando
          de npm:
        </p>
        <CodeString code={"npm install -g @nestjs/cli"} />
        <p>
          Una vez que hayas instalado el CLI de NestJS, puedes crear un nuevo
          proyecto de NestJS utilizando el siguiente comando:
        </p>
        <CodeString code={"nest new my-nestjs-project"} />
        <p>
          Este comando creará un nuevo proyecto de NestJS en un directorio
          llamado <code>my-nestjs-project</code> y descargará todas las
          dependencias necesarias para ejecutar el proyecto.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Estructura de las carpetas</h2>
        <p>
          La estructura de carpetas de un proyecto de{" "}
          <span className="text-primary font-semibold">NestJS</span> es la
          siguiente:
        </p>
        <div className=" rounded-md dark:bg-stone-900 bg-stone-100 pt-4 w-full max-w-xl text-sm">
          <Markdown>
            {`
          ├── src
          │   ├── main.ts
          │   ├── app.module.ts
          │   ├── app.controller.ts
          │   ├── app.service.ts
          │   ├── ...
          ├── test
          │   ├── app.e2e-spec.ts
          │   ├── ...
          ├── node_modules
          ├── package.json
          ├── tsconfig.json
          ├── tslint.json
          `}
          </Markdown>
        </div>
        <div className="space-y-2 w-full max-w-xl">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-inconsolata text-blue-600">
                  app.controller.ts
                </TableCell>
                <TableCell> Un controlador básico con una sola ruta.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-inconsolata text-blue-600">
                  app.controller.spec.ts
                </TableCell>
                <TableCell> Pruebas unitarias para el controlador.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-inconsolata text-blue-600">
                  app.module.ts
                </TableCell>
                <TableCell> El módulo raíz de la aplicación.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-inconsolata text-blue-600">
                  app.service.ts
                </TableCell>
                <TableCell> Un servicio básico con un único método.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-inconsolata text-blue-600">
                  main.ts
                </TableCell>
                <TableCell>
                  El archivo de entrada de la aplicación que utiliza la función
                  principal
                  <span className="font-inconsolata text-blue-600">
                    {" "}
                    NestFactory{" "}
                  </span>{" "}
                  para crear una instancia de aplicación Nest.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}

export default IntroductionPage;

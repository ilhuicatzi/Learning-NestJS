import CodeString from "@/components/code/CodeString";

function Installation() {
  return (
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
  )
}

export default Installation
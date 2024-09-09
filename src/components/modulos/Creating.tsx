import Code from "@/components/code/Code";
import CodeJs from "@/components/code/CodeJS";
import CodeString from "@/components/code/CodeString";
import { CodeModulos } from "@/utils/codeModulos";

function Creating() {
  return (
    
    <section className="space-y-5">
    <h2 className="text-2xl font-bold">Creación de un Módulo</h2>
    <p>
      Para crear un módulo en Nest, simplemente cree una clase y anote esa
      clase con el decorador{" "}
      <Code color="blue">
        @Module()
      </Code>
      . El decorador{" "}
      <Code color="blue">
        @Module()
      </Code>{" "}
      toma un solo objeto cuyas propiedades describen el módulo.
    </p>
    <p>
      Note que para crear un módulo se recomienda crear una carpeta dentro
      de{" "}
      <Code>
        src/
      </Code>{" "}
      en la que se almacenarán los archivos relacionados con el módulo, y
      esto es una buena práctica para mantener la estructura del proyecto
      organizada. Esto puede realizarse de forma manual o utilizando el
      generador de NestJS.
    </p>
    <article className="pt-7">
    <h3 className="text-xl font-medium mb-6">
      <span className="text-primary">Ejemplo:</span> Creación de un módulo
      de autenticación (Forma manual)
    </h3>
    <p>
      Para crear un módulo de autenticación, primero cree una carpeta{" "}
      <Code>
        auth/
      </Code>{" "}
      dentro de{" "}
      <Code>
        src/
      </Code>{" "}
      y dentro de esta carpeta cree un archivo{" "}
      <Code>
        auth.module.ts
      </Code>{" "}
      con el siguiente contenido:
    </p>
    <CodeJs code={CodeModulos} />
    <p>
      En el ejemplo anterior, se creó un módulo de autenticación con la
      clase <Code>AuthModule</Code> anotada con el decorador{" "}
      <Code color="blue">@Module()</Code>. El decorador <Code color="blue">@Module()</Code> toma un
      objeto vacío como argumento, pero este objeto puede tener propiedades
      que describan el módulo.
    </p>
    </article>

    <article className="pt-7">
      <h3 className="text-xl font-medium mb-6">
        <span className="text-primary">Ejemplo:</span> Creación de un módulo
        de autenticación (Generador de NestJS)
      </h3>
      <p>
        Para crear un módulo de autenticación utilizando el generador de
        NestJS, ejecute el siguiente comando en la terminal:
      </p>
      <CodeString code="nest g module auth" />
      <p>
        Este comando creará una carpeta <Code>auth/</Code> dentro de{" "}
        <Code>src/</Code> con un archivo <Code>auth.module.ts</Code> con el
        mismo contenido que el ejemplo anterior.
      </p>
    </article>
  </section>
  )
}

export default Creating
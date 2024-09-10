import Code from "../code/Code";

function Hero() {
  return (
    <section className="space-y-5">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Nest JS:</span> Controladores
      </h1>
      <p>
        Los controladores son responsables de gestionar las solicitudes
        entrantes y devolver las respuestas al cliente.
      </p>

      <p>
        El propósito de un controlador es recibir solicitudes específicas para
        la aplicación. El mecanismo de enrutamiento controla qué controlador
        recibe qué solicitudes. Con frecuencia, cada controlador tiene más de
        una ruta y las diferentes rutas pueden realizar diferentes acciones.
      </p>
      <p>
        Para crear un controlador básico, utilizamos clases y decoradores . Los
        decoradores asocian las clases con los metadatos necesarios y permiten
        que Nest cree un mapa de enrutamiento (vincula las solicitudes a los
        controladores correspondientes).
      </p>
      <p>
        Los controladores son responsables de manejar las solicitudes de la
        aplicación y devolver una respuesta al cliente. Para crear un
        controlador, simplemente cree una clase y anote con{" "}
        <Code>@Controller()</Code>. Luego, cree métodos dentro de la clase y
        anótelos con <Code color="blue">@Get()</Code>,{" "}
        <Code color="blue">@Post()</Code>,<Code color="blue">@Put()</Code>,{" "}
        <Code color="blue">@Delete()</Code>, <Code color="blue">@Patch()</Code>,{" "}
        <Code color="blue">@Options()</Code>, <Code color="blue">@Head()</Code>{" "}
        o <Code color="blue">@All()</Code>
        para definir las rutas de la aplicación.
      </p>
    </section>
  );
}

export default Hero;

import Code from "../code/Code";
import CodeJs from "../code/CodeJS";
import { CodeControllers_2 } from "@/utils/codeControllers";

function Routing() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold">Enrutamiento</h2>
      <p>
        En el siguiente ejemplo, utilizaremos el decorador{" "}
        <Code>@Controller()</Code>, que es necesario para definir un controlador
        básico. Especificaremos un prefijo de ruta de ruta opcional de auth. El
        uso de un prefijo de ruta en un decorador <Code>@Controller()</Code> nos
        permite agrupar fácilmente un conjunto de rutas relacionadas y minimizar
        el código repetitivo. Por ejemplo, podemos optar por agrupar un conjunto
        de rutas que administran interacciones con una entidad auth bajo la ruta
        <Code color="blue">/auth</Code>. En ese caso, podríamos especificar el
        prefijo de ruta cats en el decorador <Code>@Controller()</Code> para no
        tener que repetir esa parte de la ruta para cada ruta en el archivo.
      </p>

      <CodeJs code={CodeControllers_2} />

      <h3 className="pt-7 text-xl font-semibold font-inconsolata">@Get()</h3>
      <p>
        El decorador <Code>@Get()</Code> es un decorador de método de solicitud
        HTTP que se utiliza para definir una ruta de solicitud HTTP GET. En el
        ejemplo anterior, hemos definido una ruta de solicitud HTTP GET en la
        raíz de la aplicación. La ruta de solicitud HTTP GET se puede acceder
        navegando a <Code color="blue">http://localhost:3000/auth</Code> en un
        navegador web.
      </p>

      <h3 className="pt-7 text-xl font-semibold font-inconsolata">
        @Get('ruta')
      </h3>
      <p>
        En el ejemplo anterior, hemos definido una ruta de solicitud HTTP GET en
        la raíz de la aplicación. La ruta de solicitud HTTP GET se puede acceder
        navegando a <Code color="blue">http://localhost:3000/auth/ruta</Code> en
        un navegador web.
      </p>

      <h3 className="pt-7 text-xl font-semibold font-inconsolata">
        @Get(':id')
      </h3>
      <p>
        Para definir rutas con parámetros, podemos agregar tokens de parámetros
        de ruta en la ruta de la ruta para capturar el valor dinámico en esa
        posición en la URL de la solicitud. El token de parámetro de ruta en el
        ejemplo del decorador <Code>@Get()</Code> que se muestra a continuación
        demuestra este uso. Se puede acceder a los parámetros de ruta declarados
        de esta manera mediante el decorador <Code color="blue">@Param()</Code>,
        que se debe agregar a la firma del método.
      </p>

      <h3 className="pt-7 text-xl font-semibold font-inconsolata">@Post()</h3>
      <p>
        El decorador <Code>@Post()</Code> es un decorador de método de solicitud
        HTTP que se utiliza para definir una ruta de solicitud HTTP POST. En el
        ejemplo anterior, hemos definido una ruta de solicitud HTTP POST en la
        raíz de la aplicación. La ruta de solicitud HTTP POST se puede acceder
        navegando a <Code color="blue">http://localhost:3000/auth</Code> en un
        navegador web. Ahora, si necesitamos extender o especificar una ruta del
        método podemos hacerlo de la siguiente manera:
        <Code>
          @Post('<span className="italic">login</span>')
        </Code>
        , así la ruta de solicitud HTTP POST se puede acceder navegando
        <Code color="blue">http://localhost:3000/auth/login</Code> en un
        navegador web.
      </p>

      <h3 className="pt-7 text-xl font-semibold font-inconsolata">
        Objeto de solicitud (@Req() request: Request)
      </h3>
      <p>
        El objeto de solicitud es un objeto que representa la solicitud HTTP
        entrante. Contiene propiedades de la solicitud HTTP, como cabeceras,
        cuerpo, URL y más. En el ejemplo anterior, hemos definido un controlador
        que acepta un objeto de solicitud como argumento de método. El objeto de
        solicitud se puede acceder a través del decorador{" "}
        <Code color="blue">@Req()</Code>.
      </p>
      <p>
        En la mayoría de los casos, no es necesario obtener estas propiedades
        manualmente. En su lugar, podemos utilizar decoradores dedicados, como{" "}
        <Code color="blue">@Body()</Code>o <Code color="blue">@Query()</Code>,
        que están disponibles de manera predeterminada. A continuación, se
        incluye una lista de los decoradores proporcionados y los objetos
        específicos de la plataforma que representan.
      </p>

      <h3 className="pt-7 text-xl font-semibold font-inconsolata">
        Código de estado
      </h3>
      <p>
        Como se mencionó, el código de estado de respuesta siempre es 200 de
        manera predeterminada, excepto para las solicitudes POST que son 201.
        Podemos cambiar este comportamiento fácilmente agregando el
        <Code color="green">@HttpCode(...)</Code> decorador a nivel de
        controlador.
      </p>
    </section>
  );
}
export default Routing;

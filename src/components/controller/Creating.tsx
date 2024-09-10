import Code from "@/components/code/Code";
import CodeJs from "@/components/code/CodeJS";
import CodeString from "@/components/code/CodeString";
import { CodeControllers_1 } from "@/utils/codeControllers";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Creating() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold">Creación de un Controlador</h2>
      <p>
        En general existen dos formas de crear un controlador en NestJs, la
        primera es de forma manual y la segunda es utilizando el CLI de NestJs.
      </p>

      <h3 className="text-xl font-bold pt-8">Creación manual</h3>
      <p>
        Una idea general en NestJs es trabajar con módulos, por lo que para
        crear un controlador de forma manual, primero debemos ubicarnos en el
        módulo en el que deseamos crear el controlador, y luego crear un archivo
        con la extensión <Code color="green">.controller.ts</Code>, por ejemplo,
        si deseamos crear un controlador en el módulo de usuarios, debemos crear
        un archivo llamado <Code color="green"> auth.controller.ts</Code>. Y
        luego escribiremos una lógica similar a la siguiente:
      </p>

      <CodeJs code={CodeControllers_1} />

      <h3 className="text-xl font-bold pt-8">Creación con el CLI de NestJs</h3>

      <p>
        Para crear un controlador con el CLI de NestJs, debemos ejecutar el
        siguiente comando:
      </p>
      <CodeString code="nest g controller auth" />

      <p>
        Este comando creará un archivo llamado{" "}
        <Code color="green">auth.controller.ts</Code> en la carpeta{" "}
        <Code>src/auth</Code> con una estructura similar a la anterior.
      </p>

      <Alert>
        <AlertTitle>Nota 1</AlertTitle>
        <AlertDescription>
          El comando <Code color="yellow"> nest g controller auth </Code> es una
          abreviación de{" "}
          <Code color="yellow">nest generate controller auth</Code>
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTitle>Nota 2</AlertTitle>
        <AlertDescription>
          El comando <Code color="yellow"> nest g controller auth </Code> crea
          un controlador con un prefijo <Code color="green">auth</Code>, si
          deseamos crear un controlador con un prefijo diferente, debemos
          cambiar el nombre del controlador, por ejemplo{" "}
          <Code color="yellow"> nest g controller users </Code>
          aunque este controlador se creará en la carpeta <Code>src/users</Code>
        </AlertDescription>
      </Alert>
    </section>
  );
}

export default Creating;

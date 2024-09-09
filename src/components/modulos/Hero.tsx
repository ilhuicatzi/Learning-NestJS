import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Code from "../code/Code";

function Hero() {
  return (
    <section className="space-y-5">
    <h1 className="text-4xl font-bold"><span className="text-primary">Nest JS:</span> Módulos</h1>
    <p>
      Los módulos son una parte fundamental de cualquier aplicación de Nest.
      Son un mecanismo para organizar código relacionado en un grupo, similar
      a cómo los paquetes de npm organizan el código en un proyecto.
    </p>
    <p>
    Un módulo es una clase anotada con un decorador <Code color="blue">@Module()</Code>. El decorador <Code color="blue">@Module()</Code> proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.
    </p>
    <p>
    Cada aplicación tiene al menos un módulo (módulo raíz). El módulo raíz es el punto de partida que utiliza Nest para crear el gráfico de la aplicación: la estructura de datos interna que utiliza Nest para resolver las relaciones y dependencias entre módulos y proveedores. Si bien las aplicaciones muy pequeñas pueden tener teóricamente solo el módulo raíz, este no es el caso típico. Queremos enfatizar que los módulos son muy recomendables como una forma eficaz de organizar los componentes. Por lo tanto, para la mayoría de las aplicaciones, la arquitectura resultante empleará varios módulos, cada uno de los cuales encapsulará un conjunto de capacidades estrechamente relacionadas.
    </p>
    <p>
    El decorador <Code color="blue">@Module()</Code>toma un solo objeto cuyas propiedades describen el módulo:
    </p>
    <Table>
    <TableBody>
      <TableRow>
        <TableCell className="font-inconsolata text-blue-600">
        providers
        </TableCell>
        <TableCell> Los proveedores que serán instanciados por el inyector Nest y que pueden ser compartidos al menos en este módulo</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-inconsolata text-blue-600">
        controllers
        </TableCell>
        <TableCell> El conjunto de controladores definidos en este módulo que deben instanciarse</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-inconsolata text-blue-600">
        imports
        </TableCell>
        <TableCell> La lista de módulos importados que exportan los proveedores que se requieren en este módulo.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-inconsolata text-blue-600">
        exports
        </TableCell>
        <TableCell> El subconjunto de <span className="font-inconsolata text-blue-600"> providers </span> que proporciona este módulo y que deberían estar disponibles en otros módulos que importen este módulo. Puede utilizar el proveedor en sí o solo su token  (<span className="font-inconsolata text-blue-600"> provide </span> value).</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </section>
  )
}

export default Hero
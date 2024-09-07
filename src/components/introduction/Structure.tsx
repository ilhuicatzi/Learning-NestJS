import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Markdown from "react-markdown";

function Structure() {
  return (
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
  )
}

export default Structure
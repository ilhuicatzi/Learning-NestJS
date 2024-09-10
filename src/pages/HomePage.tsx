import CodeString from "@/components/code/CodeString";
import CodeHome from "@/components/Home/CodeHome";
import { CodeNestGenerate } from "@/utils/codeGenerte";
function HomePage() {
  return (
    <div>
      <section className="w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold pt-10">
          Bienvenido a <span className="text-rose-600">NestJS</span>
        </h1>
        <CodeString code={"nest generate --help "} />

        <CodeHome code={CodeNestGenerate} />
      </section>
    </div>
  );
}

export default HomePage;

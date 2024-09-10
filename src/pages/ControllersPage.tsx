import Hero from "@/components/controller/Hero";
import Creating from "@/components/controller/Creating";
import Routing from "@/components/controller/Routing";

function ControllersPage() {
  return (
    <div className="grid space-y-16 px-20 w-full max-w-4xl">
      <Hero />
      <Creating />
      <Routing />
    </div>
  );
}

export default ControllersPage;

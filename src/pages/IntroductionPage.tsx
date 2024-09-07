import Hero from "@/components/introduction/Hero";
import Feature from "@/components/introduction/Feature";
import Installation from "@/components/introduction/Installation";
import Structure from "@/components/introduction/Structure";

function IntroductionPage() {
  return (
    <div className="grid space-y-16 px-20 w-full max-w-4xl">
      <Hero />
      <Feature />
      <Installation />
      <Structure />
    </div>
  );
}

export default IntroductionPage;

function Hero() {
  return (
    <section className="mt-8 space-y-4">
        <h1 className="text-4xl font-bold">Introducciona a Nest js</h1>
        <p>
          Nest (<span className="text-primary font-semibold"> NestJS </span>) es
          un marco para crear aplicaciones escalables y eficientes del lado del
          servidor en{" "}
          <span className="text-primary font-semibold">Node.js</span>. Utiliza
          JavaScript progresivo, está creado con{" "}
          <span className="text-primary font-semibold">TypeScript</span> y es
          totalmente compatible con él (pero permite a los desarrolladores
          codificar en JavaScript puro) y combina elementos de{" "}
          <strong>OOP</strong> (programación orientada a objetos),{" "}
          <strong>FP</strong> (programación funcional) y <strong>FRP</strong>{" "}
          (programación reactiva funcional).
        </p>
        <p>
          Bajo el capó, Nest hace uso de robustos marcos de servidor HTTP como{" "}
          <span className="text-primary font-semibold">Express</span> (el
          predeterminado) y, opcionalmente, puede configurarse para usar{" "}
          <span className="text-primary font-semibold">Fastify</span> también.
        </p>

        <p>
          Nest ofrece un nivel de abstracción superior al de los frameworks
          Node.js habituales (Express/Fastify), pero también expone sus{" "}
          <strong>API</strong> directamente al desarrollador. Esto les da la
          libertad de usar la gran cantidad de módulos de terceros que están
          disponibles para la plataforma subyacente.
        </p>
      </section>
  )
}

export default Hero
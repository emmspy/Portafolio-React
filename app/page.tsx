import CustomButton from "@/components/CustomButton";
import React from "react";
import Image from "next/image";
import Proyect from "@/components/Proyect";

const page = () => {
  return (
    <main>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">Full Stack Developer</h1>
          <p className="hero__subtitle">
            Hola! Soy Emily, Desarrolladora Web Full Stack y estudiante de la
            carrera Certified Tech Developer en Digital House. Me especializo en
            el desarrollo Front end, donde cuento con experiencia en HTML, CSS,
            Javascript, React, NodeJs, Bootstrap y Tailwind. En el área Back end
            también desempeñó habilidades como Express, Java, Spring boot, Mongo
            y PostgreSQL.
          </p>
          <CustomButton />
        </div>
        <div className="hero__image-container mt-28">
          <div className="hero__image">
            <Image
              src="/banner.jpeg"
              width={1000}
              height={403}
              alt="desarrollo"
            />
          </div>
        </div>
      </div>
      <h2 className="hero__title text-center ">Proyectos</h2>
      <section className="hero">
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
      </section>
    </main>
  );
};

export default page;

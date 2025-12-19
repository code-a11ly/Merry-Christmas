'use client';
import Image from "next/image";
import Snow from './snow/snow';
import Card from './card/card';

import "./globals.css";
import { quicksand } from "./fonts";
import { oswald } from "./fonts";
import { sacramento } from "@/app/fonts";

export default function Home() {


  return (
    <>
    <Snow />
    <div className="
        flex min-h-screen min-w-screen items-center justify-center font-sans
        bg-[url('/christmas_ball.png')]
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-white z-50">
        <p
          className={`
            slide-message
            whitespace-nowrap
            py-2
            text-red-500
            text-lg
            font-semibold
            ${quicksand.className}
          `}
        >
          🎄 Neste Natal, que a luz da esperança ilumine cada lar,
          que a paz preencha os corações
          e que o amor esteja presente em cada detalhe.

          ✨ A equipe de Tecnologia da Informação deseja a todos
          um Natal repleto de alegria, união e momentos inesquecíveis,
          e que o Ano Novo traga novas conquistas, saúde e sucesso.

          🎅 Feliz Natal e um próspero Ano Novo! 🎁
        </p>
      </div>

      <div className="h-screen flex items-end">
  <Image
    src="/tree.png"
    alt="Tree"
    width={500}
    height={1000}
    priority
    className="h-full w-auto max-w-none scale-110 object-contain"
  />
</div>


      <main className="flex flex-col w-screen items-center justify-center gap-8 text-center z-0">

        <h1 className={`${oswald.className} text-5xl font-bold text-white`}>
          A equipe de TI do HEJ<br/>deseja a todos um
        </h1>

        <h1 className={`
          ${sacramento.className}
          text-white
          leading-none
          text-6xl
          sm:text-7xl
          md:text-8xl
          lg:text-9xl
          xl:text-[10rem]
          2xl:text-[12rem]
        `}>
          Feliz<br/>Natal
        </h1>

        <a
          target="_blank"
          href="https://portal.agirsaude.org.br/login"
          className="flex gap-3 w-auto bg-blue-500 text-md text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Acesse o Portal Agir
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>

        </a>

      </main>
      <Card />

    </div>
    </>
  );
}

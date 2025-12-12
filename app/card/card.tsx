
'use client';
import Image from "next/image";
import Countdown from './countdown/countdown'

export default function Card() {

  const futureDate = new Date("2025-12-25T00:00:00-03:00").getTime();




  return (

      <main className="flex h-128 w-full max-w-3xl mt-128 rounded-lg flex-col items-center justify-between py-20 px-16 bg-white sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            FALTAM
          </h1>
          <Countdown targetDate={futureDate} />
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            PARA O NATAL
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600">
            Quer enviar{" "}
            <a
              className="font-medium text-zinc-950"
            >
              Mensagem de Natal
            </a>{" "}
            para um{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950"
            >
              Amig(a)
            </a>{" "}
            ?
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex flex-row h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          >
            Enviar Mensagem
          </a>

        </div>

      </main>
  );
}

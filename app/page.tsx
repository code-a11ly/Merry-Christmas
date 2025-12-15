'use client';
import Image from "next/image";
import Snow from './snow/snow';
import Card from './card/card';

import "./globals.css";
import { quicksand } from "./fonts";
import { sacramento } from "@/app/fonts";

export default function Home() {


  return (
    <>
    <Snow />
    <div className="flex min-h-screen align-center justify-center font-sans bg-red-500 overflow-hidden">
      <Image
        src="/tree.png"
        alt="Tree"
        width={500}         // any number, Next.js needs this for aspect ratio
        height={1000}
        className="h-screen w-auto object-cover"
        priority
      />
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 sm:items-start">

        <h1 className={`${quicksand.className} text-4xl font-bold text-green-500`}>
          A equipe da TI<br/>deseja a todos um
        </h1>

        <h1 className={`${sacramento.className} text-white christmas-title text-9xl`}>
          Feliz<br/>Natal
        </h1>

        {/*
        <Image
          src="/feliz_natal.png"
          alt="Tree"
          width={1000}         // any number, Next.js needs this for aspect ratio
          height={2000}
          // className="h-screen w-auto object-cover"
          priority
        />
        */}
      </main>
      <Card />

    </div>
    </>
  );
}

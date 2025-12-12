'use client';
import Image from "next/image";
import Snow from './snow/snow';
import Card from './card/card';

export default function Home() {


  return (
    <>
    <Snow />
    <div className="flex min-h-screen  font-sans bg-red-500">
      <Image
        src="/tree.png"
        alt="Tree"
        width={500}         // any number, Next.js needs this for aspect ratio
        height={1000}
        className="h-screen w-auto object-cover"
        priority
      />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="text-5xl font-bold leading-10 text-green-500">
          A EQUIPE DO TI<br/>DESEJA A TODOS UM
        </h1>
      </main>
      <Card />

    </div>
    </>
  );
}

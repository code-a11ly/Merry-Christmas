'use client';

import dynamic from "next/dynamic";
import { useState } from 'react';

const Countdown = dynamic(() => import("./countdown/countdown"), {
  ssr: false,
});

export default function Card() {
  // Just a FIXED timestamp (safe for SSR)
  const targetDate = new Date("2025-12-25T00:00:00-03:00").getTime();

  const [dataToSend, setDataToSend] = useState({
    name: '',
    email: '',
    password: '',
    is_admin: false,
    role: 'Employee'
  });

  const handleInputChange = (key, value) => {
    setDataToSend({
      ...dataToSend,
      [key]: value
    });
  };


  return (

      <main className="flex h-fit w-full m-10 max-w-3xl rounded-lg flex-col items-center justify-between py-8 px-8 bg-white sm:items-start">

        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">

          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#4f4f4f]">
            FALTAM
          </h1>
          <Countdown targetDate={targetDate} />
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-grey-900">
            PARA O NATAL
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600">
            Quer enviar{" "}
            <a
              className="font-medium text-zinc-950"
            >
              Mensagem de Natal
            </a>
            ?
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser();
          }}
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-md text-gray-400 mb-2">
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              // placeholder="Enter your name"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={dataToSend.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-md text-gray-400 mb-2">
              Nome do Amig(a)
            </label>
            <input
              type="text"
              id="name"
              // placeholder="Enter your name"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={dataToSend.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-normal text-gray-400 mb-2">
              Email do Amig(a)
            </label>
            <input
              type="text"
              id="email"
              placeholder="Informe email"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={dataToSend.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-md text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Enviar mensagem
          </button>
        </form>

      </main>
  );
}

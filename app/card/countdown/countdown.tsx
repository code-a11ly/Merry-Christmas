'use client';
import React, { useEffect, useState } from "react";

const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const pad = (num) => String(num).padStart(2, "0");

const LABELS_PT = {
  days: "DIAS",
  hours: "HORAS",
  minutes: "MINUTOS",
  seconds: "SEGUNDOS",
};

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft(targetDate);
      setTimeLeft(updated);
      if (!updated) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <h2 className="text-center text-xl font-bold">Tempo esgotado!</h2>;

  return (
    <div className="flex gap-5 justify-center font-sans">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="text-center">
          <div className="bg-[#222] w-24 text-white text-6xl w-20 p-2 rounded-md shadow-lg shadow-gray-800">
            <span>{pad(timeLeft[unit])}</span>
          </div>
          <span className="block text-base font-bold mt-1 text-gray-500">
            {LABELS_PT[unit]}
          </span>
        </div>
      ))}
    </div>
  );
}

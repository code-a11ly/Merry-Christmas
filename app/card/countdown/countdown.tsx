'use client';
import { useEffect, useState } from "react";

const calculateTimeLeft = (target) => {
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null; // or a skeleton

  return (
    <div className="flex gap-5">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-red-500 text-white text-3xl w-20 p-2 rounded-md">
            <span>{pad(value)}</span>
          </div>
          <span className="block text-gray-400">{unit.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

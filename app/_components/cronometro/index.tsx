"use client";
import { useEffect, useState } from "react";

const Cronometro = () => {
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const past = Date.parse("2024-09-29 00:00:00");
    const now = new Date();
    const diff = now - past;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    setMonths(months - years * 12);
    setDays(days - months * 30);
    setHours(hours - days * 24);
    setMinutes(mins - hours * 60);
    setSeconds(secs - mins * 60);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2>O Bairro Tatajuba está a</h2>
      <h1>
         {months} {months > 1 ? "Meses" :"Mês"},  {days} dias, {hours}:{minutes}:{seconds}{" "}
        sem faltar água.
      </h1>
    </div>
  );
};

export default Cronometro;

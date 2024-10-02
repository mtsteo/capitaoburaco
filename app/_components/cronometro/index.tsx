/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  // const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const past = Date.parse("2024-10-01 00:00:00");
    const now : any = new Date();
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
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Falta de água no Tatajuba
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-muted-foreground">
          Tempo decorrido desde a última falta de água
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{elapsedTime.months}</p>
            <p className="text-sm text-muted-foreground">Months</p>
          </div> */}
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{days}</p>
            <p className="text-sm text-muted-foreground">
              {days > 1 ? "Dias" : "Dia"}
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{hours}</p>
            <p className="text-sm text-muted-foreground">
              {hours > 1 ? "Horas" : "Hora"}
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{minutes}</p>
            <p className="text-sm text-muted-foreground">
              {minutes > 1 ? "Minutos" : "Minuto"}
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{seconds}</p>
            <p className="text-sm text-muted-foreground">Segundos</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

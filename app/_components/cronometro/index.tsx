"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Cronometro: React.FC = () => {
  const [elapsedTime, setElapsedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const startDate = useMemo(() => new Date("2024-10-17T08:00:00"), []);
  const getTime = useCallback(() => {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setElapsedTime((prevTime) => {
      if (
        prevTime.days !== days ||
        prevTime.hours !== hours ||
        prevTime.minutes !== minutes ||
        prevTime.seconds !== seconds
      ) {
        return { days, hours, minutes, seconds };
      }
      return prevTime;
    });
  }, [startDate]);

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader></CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-muted-foreground">
          Tempo decorrido desde a última falta de água
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(elapsedTime).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-primary/10 rounded-lg p-4 text-center"
            >
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground">
                {value === 1 ? unit.slice(0, -1) : unit}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Cronometro;

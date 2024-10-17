"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRange } from "react-day-picker";
import { isWithinInterval } from "date-fns";

const InteractiveCalendar = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date("2024-07-01T00:00:00"),
    to: new Date(),
  });

  const isDateInRange = (date: Date) => {
    if (dateRange?.from && dateRange?.to) {
      return isWithinInterval(date, {
        start: dateRange.from,
        end: dateRange.to,
      });
    }
    return false;
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Faltas de água
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-6">
          <Calendar
            disabled
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            className="rounded-md border bg-white h-full w-full"
            modifiers={{ inRange: isDateInRange }}
            modifiersStyles={{
              inRange: {
                backgroundColor: "red",
                color: "white",
              },
              range_start: {
                backgroundColor: "red",
                color: "white",
              },
              range_end: {
                backgroundColor: "red",
                color: "white",
              },
            }}
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
            }}
            locale={ptBR}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveCalendar;

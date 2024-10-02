"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  // Hardcoded initial date (example: January 1, 2023)
  const initialDate = new Date(2024, 8, 30)
  const [elapsedTime, setElapsedTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateElapsedTime = () => {
      const now = new Date()
      const timeDiff = now.getTime() - initialDate.getTime()

      // const monthsDiff = now.getMonth() - initialDate.getMonth() + 
      //   (now.getFullYear() - initialDate.getFullYear()) * 12
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 30
      const hoursDiff = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
      const minutesDiff = Math.floor((timeDiff / (1000 * 60)) % 60)
      const secondsDiff = Math.floor((timeDiff / 1000) % 60)

      setElapsedTime({ 
        // months: monthsDiff, 
        days: daysDiff, 
        hours: hoursDiff, 
        minutes: minutesDiff, 
        seconds: secondsDiff 
      })
    }

    updateElapsedTime() // Initial update
    const intervalId = setInterval(updateElapsedTime, 1000)

    return () => clearInterval(intervalId)
  })

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Falta de água no Tatajuda</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-muted-foreground">
          Tempo decorrido desde a última falta de água em {initialDate.toLocaleDateString()}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{elapsedTime.months}</p>
            <p className="text-sm text-muted-foreground">Months</p>
          </div> */}
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{elapsedTime.days}</p>
            <p className="text-sm text-muted-foreground">Days</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{elapsedTime.hours}</p>
            <p className="text-sm text-muted-foreground">Hours</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{elapsedTime.minutes}</p>
            <p className="text-sm text-muted-foreground">Minutes</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold">{elapsedTime.seconds}</p>
            <p className="text-sm text-muted-foreground">Seconds</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
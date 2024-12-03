"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import CircularLoader from "../_components/circularLoader";

export default function ElectionResultsPage() {
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalVotes, setTotalVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("/api/elections/results");
        if (!response.ok) {
          throw new Error("Erro ao buscar resultados da eleição");
        }

        const data = await response.json();
        setResults(data.results);
        setTotalVotes(data.totalVotes);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <CircularLoader />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-3xl">
            Algo deu errado, tente novamente em alguns instantes!
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center">Resultados</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result &&
              result.map((candidate: any) => (
                <Card key={candidate.name}>
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <Avatar className="h-25 w-20">
                      <AvatarImage
                        src={candidate.pictureUrl}
                        alt={candidate.name}
                      />
                      <AvatarFallback>{candidate.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl">{candidate.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-2xl font-bold">{candidate.votes}</p>
                        <p className="text-muted-foreground">Número de votos</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          {((candidate.votes / totalVotes) * 100).toFixed(2)}%
                        </p>
                        <p className="text-muted-foreground">
                          Porcentagem do total de votos
                        </p>
                      </div>
                      <Progress
                        value={(candidate.votes / totalVotes) * 100}
                        className="h-2 w-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          <p className="text-center mt-6 text-muted-foreground">
            Número total de votos: {totalVotes}
          </p>
        </div>
      )}
    </div>
  );
}

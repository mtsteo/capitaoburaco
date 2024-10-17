import InteractiveCalendar from "./_components/Calendar";
import Cronometro from "./_components/cronometro";

export default function Home() {
  return (
    <div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <InteractiveCalendar/>
        <Cronometro/>
      </main>
    </div>
  </div>
  );
}

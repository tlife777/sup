import Link from "next/link";
import DayState from "@/components/habit-page-components/DayState";
import DeleteButton from "@/components/habit-page-components/DeleteButton";
import { kv } from "@vercel/kv";

export type Habits = {
  [habit: string]: Record<string, boolean>;
} | null;

export default async function Home() {
  const habits: Habits = await kv.hgetall("habits");

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  const last7Days = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date.toISOString().slice(0, 10);
    })
    .reverse();

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            No habits yet
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-light text-black">
                {habit}
              </span>
              <DeleteButton habit={habit} />
            </div>
            <Link href={`/habit/calendar/${habit}`}>
              <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                {sortedWeekDays.map((day, index) => (
                  <div key={day} className="flex flex-col last:font-bold">
                    <span className="font-sans text-xs text-white text-center">
                      {day}
                    </span>
                    {/* day state */}
                    <DayState day={habitStreak[last7Days[index]]} />
                  </div>
                ))}
              </section>
            </Link>
          </div>
        ))}
      <Link
        href="/habit/new-habit"
        className="sticky text-center text-white bottom-10 w-2/3 left-1/2 -translate-x-1/2 bg-green-500 font-display font-regular text-2xl p-2 rounded-md"
      >
        Novo hábito
      </Link>
    </main>
  );
}

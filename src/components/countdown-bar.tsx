"use client";

import { useEffect, useState } from "react";
import { EVENT_START_AT } from "@/lib/site";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft | null {
  const difference = new Date(EVENT_START_AT).getTime() - Date.now();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

const units: Array<[keyof TimeLeft, string, string]> = [
  ["days", "dias", "d"],
  ["hours", "horas", "h"],
  ["minutes", "min", "m"],
  ["seconds", "seg", "s"],
];

export function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft());
    update();
    const interval = window.setInterval(update, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="countdown" role="timer" aria-label="Contagem regressiva para o workshop">
      <div className="countdown-heading">
        <span className="live-dot" aria-hidden="true" />
        <strong>{timeLeft === null ? "Workshop iniciado" : "Começa em"}</strong>
      </div>

      {timeLeft ? (
        <div className="countdown-units" aria-live="off">
          {units.map(([key, label, shortLabel]) => (
            <div className="countdown-unit" key={key}>
              <b suppressHydrationWarning>{String(timeLeft[key]).padStart(2, "0")}</b>
              <span className="unit-label">{label}</span>
              <span className="unit-label-short">{shortLabel}</span>
            </div>
          ))}
        </div>
      ) : (
        <span className="countdown-loading">Estamos ao vivo</span>
      )}

      <span className="countdown-date">05 OUT • 19H</span>
    </div>
  );
}

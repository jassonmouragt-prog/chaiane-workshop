"use client";

import { useEffect, useRef, useState } from "react";
import { EVENT_START_AT } from "@/lib/site";

const EVENT_DATE = new Date(EVENT_START_AT).getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeTimeLeft(now: number): TimeLeft | null {
  const difference = EVENT_DATE - now;

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
  const clockOffsetRef = useRef(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => computeTimeLeft(Date.now()));

  useEffect(() => {
    let cancelled = false;

    const tick = () => setTimeLeft(computeTimeLeft(Date.now() + clockOffsetRef.current));

    async function syncClock() {
      try {
        const res = await fetch("/api/time", { cache: "no-store" });
        const data = (await res.json()) as { now?: number };
        if (cancelled || typeof data?.now !== "number") return;
        clockOffsetRef.current = data.now - Date.now();
        tick();
      } catch {
        // mantém o relógio local como referência
      }
    }

    syncClock();

    const interval = window.setInterval(tick, 1_000);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
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

      <span className="countdown-date">07 OUT • 19H</span>
    </div>
  );
}
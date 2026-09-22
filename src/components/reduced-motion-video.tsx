"use client";

import { useEffect, useRef } from "react";

export function ReducedMotionVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;

    const syncPlayback = () => {
      if (media.matches || !isVisible) {
        videoRef.current?.pause();
      } else {
        void videoRef.current?.play().catch(() => undefined);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.35 },
    );

    if (videoRef.current) observer.observe(videoRef.current);
    media.addEventListener("change", syncPlayback);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", syncPlayback);
    };
  }, []);

  return <video ref={videoRef} src={src} muted loop playsInline preload="auto" aria-label="Exemplo de conteúdo estratégico" />;
}

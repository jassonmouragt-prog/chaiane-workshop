"use client";

import { META_PIXEL_ID } from "@/lib/meta-pixel";
import { WHATSAPP_GROUP_URL } from "@/lib/site";
import styles from "@/app/obrigada/confirmation.module.css";

type GroupPixelWindow = Window & {
  fbq?: (
    command: "trackSingleCustom",
    pixelId: string,
    event: "WhatsAppGroupClick",
    parameters: { placement: "hero" | "final" },
  ) => void;
};

export function WhatsAppGroupButton({ placement, children }: {
  placement: "hero" | "final";
  children: React.ReactNode;
}) {
  const configured = Boolean(WHATSAPP_GROUP_URL.trim());
  const content = <>
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.2 7.7c.3-.4.6-.3.8.1l.8 1.6c.1.3 0 .5-.4 1 .7 1.4 1.7 2.4 3.2 3 .5-.5.8-1 1.1-.8l1.8.9c.4.2.4.5.2.9-.4.9-1.2 1.4-2.2 1.2-3-.6-5.8-3.3-6.4-6.2-.1-.6.5-1.4 1.1-1.7Z" fill="currentColor" />
    </svg>
    <span>{children}</span>
  </>;

  if (!configured) {
    return <button className={styles.button} type="button" disabled aria-describedby="group-unavailable">{content}</button>;
  }

  return (
    <a className={styles.button} href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer"
      onClick={() => {
        try {
          (window as GroupPixelWindow).fbq?.("trackSingleCustom", META_PIXEL_ID, "WhatsAppGroupClick", { placement });
        } catch {
          // Uma falha no rastreamento nunca deve impedir a entrada no grupo.
        }
      }}>
      {content}
    </a>
  );
}

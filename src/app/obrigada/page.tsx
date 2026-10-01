import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Check, Clock3, Info, Radio } from "lucide-react";
import brandLogo from "../../../logo chaiane.png";
import { WhatsAppGroupButton } from "@/components/whatsapp-group-button";
import { WHATSAPP_GROUP_URL } from "@/lib/site";
import styles from "./confirmation.module.css";

export const metadata: Metadata = {
  title: "Sua vaga está confirmada | Lapidando Nails",
  description: "Sua compra foi aprovada. Entre no grupo oficial da Imersão Lapidando Nails para receber os materiais e as orientações.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "Sua vaga está confirmada | Lapidando Nails",
    description: "Seu próximo passo é entrar no grupo oficial da imersão.",
  },
};

const steps = [
  "Entre no grupo oficial do WhatsApp",
  "Salve as datas da imersão",
  "Aguarde as orientações e materiais",
];

export default function ConfirmationPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="confirmation-title">
          <Image className={styles.logo} src={brandLogo} alt="Lapidando Nails — Chaiane Pasquali" priority sizes="210px" />
          <div className={styles.confirmationMark} aria-hidden="true"><Check /></div>
          <h1 id="confirmation-title">Parabéns! Sua vaga está <span>confirmada.</span></h1>
          <p className={styles.subtitle}>Você agora faz parte da <strong>Imersão Lapidando Nails.</strong></p>
          <p className={styles.intro}>Falta apenas um passo para garantir que você receba todas as informações importantes da imersão.</p>
          <div className={styles.action}>
            <WhatsAppGroupButton placement="hero">ENTRAR NO GRUPO DO WHATSAPP</WhatsAppGroupButton>
            <p className={styles.caption}>É pelo grupo que você receberá avisos, materiais, lembretes e todas as orientações da imersão.</p>
            {!WHATSAPP_GROUP_URL.trim() && <p id="group-unavailable" className={styles.unavailable} role="status">O link do grupo ainda não está disponível nesta página. Aguarde as orientações da organização.</p>}
          </div>
          <aside className={styles.notice}>
            <Info aria-hidden="true" />
            <div><p><strong>Importante: não feche esta página antes de entrar no grupo.</strong></p><p>O WhatsApp será o principal canal de comunicação da imersão.</p></div>
          </aside>
        </section>

        <div className={styles.details}>
          <section className={styles.steps} aria-labelledby="steps-title">
            <h2 id="steps-title">Seus próximos passos</h2>
            <ol>{steps.map((step, index) => <li key={step}><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{step}</span></li>)}</ol>
          </section>
          <section className={styles.event} aria-labelledby="event-title">
            <h2 id="event-title">Imersão<br />Lapidando Nails</h2>
            <ul>
              <li><CalendarDays aria-hidden="true" /><span>07 e 08 de outubro</span></li>
              <li><Clock3 aria-hidden="true" /><span>Às 19h</span></li>
              <li><Radio aria-hidden="true" /><span>Ao vivo</span></li>
            </ul>
          </section>
        </div>

        <section className={styles.final} aria-label="Entrar no grupo oficial">
          <p>Entre agora para não perder nenhuma informação importante.</p>
          <WhatsAppGroupButton placement="final">ENTRAR NO GRUPO AGORA</WhatsAppGroupButton>
        </section>
        <footer className={styles.footer}>Chaiane Pasquali <span aria-hidden="true">·</span> Imersão Lapidando Nails</footer>
      </div>
    </main>
  );
}

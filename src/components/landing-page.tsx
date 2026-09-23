import Image, { getImageProps, type StaticImageData } from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  Clapperboard,
  FileText,
  Fingerprint,
  Gauge,
  MessageCircleMore,
  Play,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Video,
} from "lucide-react";
import { CHECKOUT_URL, SITE_ASSETS } from "@/lib/site";
import { ReducedMotionVideo } from "@/components/reduced-motion-video";
import { CountdownBar } from "@/components/countdown-bar";
import guaranteeSeal from "../../selo 07 dias.png";
import heroDesktop from "../../banner hero desktop.png";
import heroMobile from "../../banner hero mobile.png";
import brandLogo from "../../logo chaiane.png";
import brandLogoWhite from "../../logo chaiane branca.png";
import studentResult from "../../resultado aluna.jpeg";
import beforeResult from "../../antes.jpeg";
import afterResult from "../../depois.jpeg";
import aboutChaiane from "../../sobre chaiane.jpeg";

type AssetFrameProps = {
  asset: string | StaticImageData | null;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
};

function AssetFrame({ asset, alt, label, className = "", priority = false }: AssetFrameProps) {
  return (
    <div className={`asset-frame ${className}`}>
      {asset ? (
        <Image src={asset} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" priority={priority} />
      ) : (
        <div className="asset-placeholder" role="img" aria-label={`${alt}. Imagem pendente.`}>
          <ScanLine aria-hidden="true" />
          <span>{label}</span>
          <small>Imagem disponível em breve</small>
        </div>
      )}
    </div>
  );
}

function CTA({ label = "Quero garantir minha vaga", light = false }: { label?: string; light?: boolean }) {
  return (
    <a className={`cta ${light ? "cta-light" : ""}`} href={CHECKOUT_URL}>
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <CountdownBar />
    </div>
  );
}

function HeroSection() {
  const { props: desktopBanner } = getImageProps({
    src: heroDesktop,
    alt: "Chaiane Pasquali em cenário claro e sofisticado",
    sizes: "100vw",
    priority: true,
    quality: 90,
  });
  const { props: mobileBanner } = getImageProps({
    src: heroMobile,
    alt: "Chaiane Pasquali em cenário claro e sofisticado",
    sizes: "100vw",
    priority: true,
    quality: 90,
  });

  return (
    <header className="hero" id="inicio">
      <div className="hero-ambient" aria-hidden="true"><i /><i /><i /></div>
      <TopBar />
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <div className="signature">
            <Image src={brandLogo} alt="Lapidando Nails" priority />
          </div>
          <h1>Da precisão na técnica à <em>presença digital.</em></h1>
          <p className="hero-lead">
            Uma imersão para aperfeiçoar seu trabalho com Molde F1 e aprender a valorizar cada detalhe por meio de conteúdos estratégicos.
          </p>
          <div className="hero-actions">
            <CTA />
            <a className="text-link" href="#experiencia">
              Conhecer a imersão <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <div className="hero-notes" aria-label="Informações do workshop">
            <span><Video aria-hidden="true" /> Workshop ao vivo</span>
            <span><CalendarDays aria-hidden="true" /> 2 dias de imersão</span>
          </div>
          <ul className="hero-offer" aria-label="O que está incluso no curso">
            <li><Video aria-hidden="true" /><span>02 aulas ao vivo comigo</span></li>
            <li><Sparkles aria-hidden="true" /><span>Curso Prático de Molde F1</span></li>
            <li><Clapperboard aria-hidden="true" /><span>Segredos para construir conteúdos que viralizam</span></li>
            <li><MessageCircleMore aria-hidden="true" /><span>Suporte exclusivo</span></li>
            <li><FileText aria-hidden="true" /><span>Apostila detalhada de Molde F1</span></li>
            <li><UsersRound aria-hidden="true" /><span>Grupo no WhatsApp com os materiais do Workshop</span></li>
            <li><BadgeCheck aria-hidden="true" /><span>Certificado de participação</span></li>
          </ul>
        </div>
      </div>
      <picture className="hero-banner">
        <source media="(max-width: 700px)" srcSet={mobileBanner.srcSet} />
        <img {...desktopBanner} alt="Chaiane Pasquali em cenário claro e sofisticado" />
      </picture>
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Precisão</span><i /> <span>Agilidade</span><i /> <span>Posicionamento</span><i /> <span>Visibilidade</span><i />
          <span>Precisão</span><i /> <span>Agilidade</span><i /> <span>Posicionamento</span><i /> <span>Visibilidade</span><i />
        </div>
      </div>
    </header>
  );
}

const pains = [
  "Insegurança na hora de executar a técnica de Molde F1",
  "Dificuldade em alcançar simetria e um acabamento impecável",
  "Perder muito tempo corrigindo detalhes com a lixa",
  "Produzir conteúdo, mas não alcançar o público que gostaria",
  "Sentir que seu trabalho merece mais visibilidade sem saber como conquistá-la",
];

function PainPointsSection() {
  return (
    <section className="section pain-section" id="experiencia">
      <div className="page-shell pain-layout">
        <div className="section-intro sticky-copy">
          <h2>Seu trabalho pode ser excelente e ainda assim <em>não ser percebido.</em></h2>
          <p>Depois de anos no mercado, eu sei que muitas Nail Designers enfrentam desafios que vão muito além da execução de um alongamento.</p>
          <p>Talvez você também se identifique com algumas dessas situações:</p>
        </div>
        <div className="pain-list">
          {pains.map((pain, index) => (
            <div className="pain-row" key={pain}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{pain}</p>
              <Fingerprint aria-hidden="true" />
            </div>
          ))}
          <p className="pain-close">E a verdade é que essas dificuldades são mais comuns do que você imagina.</p>
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="transformation">
      <div className="page-shell transformation-grid">
        <div className="turning-point" aria-hidden="true">
          <span>Antes</span>
          <div className="turning-line"><i /></div>
          <span>Depois</span>
        </div>
        <div className="transformation-copy">
          <h2>Mas você pode transformar a forma como trabalha <em>e se posiciona.</em></h2>
          <div className="copy-columns">
            <p>Durante essa imersão, você vai aprimorar sua técnica de alongamento em Molde F1, buscando mais agilidade, precisão e qualidade no acabamento.</p>
            <p>Além disso, vai descobrir como produzir conteúdos estratégicos que despertam interesse, estimulam o engajamento e ampliam a visibilidade do seu trabalho.</p>
          </div>
          <blockquote>Porque não basta desenvolver uma técnica. É preciso saber mostrar o valor do que você faz.</blockquote>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone" aria-label="Mockup de celular preparado para vídeo de conteúdo">
        <div className="phone-speaker" />
        <div className="phone-screen">
          {SITE_ASSETS.socialVideo ? (
            <ReducedMotionVideo src={SITE_ASSETS.socialVideo} />
          ) : SITE_ASSETS.phoneTable ? (
            <Image src={SITE_ASSETS.phoneTable} alt="Celular filmando uma mesa de trabalho" fill sizes="320px" />
          ) : (
            <div className="reel-placeholder">
              <div className="reel-top"><span>CHAIF1</span><Clapperboard aria-hidden="true" /></div>
              <div className="reel-focus"><span>Seu trabalho</span><strong>merece ser visto.</strong></div>
              <div className="play-button"><Play fill="currentColor" aria-hidden="true" /></div>
              <div className="reel-caption"><i /> Estrutura pronta para o seu vídeo</div>
            </div>
          )}
        </div>
      </div>
      <div className="content-pulse pulse-one">Enquadramento</div>
      <div className="content-pulse pulse-two">Intenção</div>
      <div className="content-pulse pulse-three">Alcance</div>
    </div>
  );
}

function ContentStrategySection() {
  return (
    <section className="section content-section">
      <div className="page-shell content-grid">
        <div className="content-visual">
          <div className="content-sheet">
            <span>Do detalhe</span>
            <span>à descoberta</span>
            <div className="sheet-lines" aria-hidden="true" />
          </div>
          <PhoneMockup />
        </div>
        <div className="content-copy">
          <h2>Transforme sua técnica em conteúdo que <em>chama atenção.</em></h2>
          <p>Você também vai aprender a construir conteúdos com mais intenção: da escolha do detalhe ao enquadramento que evidencia seu acabamento.</p>
          <p>Chaiane vai compartilhar estratégias para aumentar as chances de viralização, fortalecer sua presença digital e mostrar o valor do seu trabalho de forma profissional.</p>
          <ul className="minimal-list">
            <li><Target aria-hidden="true" /> Conteúdo com objetivo, não apenas postagem</li>
            <li><Gauge aria-hidden="true" /> Mais consistência para crescer nas redes</li>
            <li><Sparkles aria-hidden="true" /> Uma imagem à altura da sua entrega</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const benefitTracks = [
  {
    marker: "Movimento I",
    title: "Domínio técnico",
    description: "A precisão que você sente na execução e a cliente reconhece no resultado.",
    items: [
      ["Técnica", "Aprimore o Molde F1 com mais simetria, precisão e segurança."],
      ["Tempo", "Reduza o tempo de mesa, o retrabalho e o excesso de lixamento."],
      ["Acabamento", "Eleve a qualidade final e valorize cada detalhe da entrega."],
    ],
  },
  {
    marker: "Movimento II",
    title: "Presença percebida",
    description: "A estratégia que transforma um bom trabalho em desejo, atenção e autoridade.",
    items: [
      ["Conteúdo", "Produza materiais estratégicos que despertam interesse no público."],
      ["Visibilidade", "Amplie sua presença e comunique melhor o valor do seu trabalho."],
      ["Posicionamento", "Fortaleça sua imagem como uma profissional preparada e atual."],
    ],
  },
];

function BenefitsSection() {
  return (
    <section className="section benefits-section" id="aprendizado">
      <div className="page-shell">
        <div className="wide-heading">
          <h2>Uma imersão.<br /><em>Dois movimentos.</em></h2>
          <p>Domine o detalhe que a cliente vê de perto e construa a presença que faz seu trabalho chegar mais longe.</p>
        </div>
        <div className="benefits-stage">
          {benefitTracks.map((track, trackIndex) => (
            <article className={`benefit-track track-${trackIndex + 1}`} key={track.title}>
              <div className="track-heading">
                <span>{track.marker}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
              </div>
              <ol className="track-list">
                {track.items.map(([title, description], itemIndex) => (
                  <li key={title}>
                    <span className="step-index">{String(itemIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                    <Check aria-hidden="true" />
                  </li>
                ))}
              </ol>
            </article>
          ))}

          <div className="benefits-bridge" aria-hidden="true">
            <span>Técnica</span>
            <div className="bridge-line"><i><ArrowDown /></i></div>
            <span>Presença</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section proof-section">
      <div className="page-shell">
        <div className="proof-heading">
          <h2>Resultados que merecem <em>ser vistos.</em></h2>
          <p>Relatos, comparativos técnicos e detalhes que tornam a evolução visível de forma clara e honesta.</p>
        </div>
        <div className="proof-composition">
          <AssetFrame asset={studentResult} alt="Relato de uma aluna sobre seus resultados" label="Print de resultado da aluna" className="testimonial-proof" />
          <div className="before-after">
            <div>
              <span>Antes</span>
              <AssetFrame asset={beforeResult} alt="Resultado antes da aplicação" label="Foto do antes" />
            </div>
            <div>
              <span>Depois</span>
              <AssetFrame asset={afterResult} alt="Resultado depois da aplicação" label="Foto do depois" />
            </div>
          </div>
          <div className="proof-note"><BadgeCheck aria-hidden="true" /><span>Transformações apresentadas com contexto e transparência.</span></div>
        </div>
      </div>
    </section>
  );
}

const offerItems = [
  [Video, "02 aulas ao vivo comigo"],
  [Sparkles, "Curso Prático de Molde F1"],
  [Clapperboard, "Segredos para construir conteúdos que viralizam"],
  [MessageCircleMore, "Suporte exclusivo"],
  [FileText, "Apostila detalhada de Molde F1"],
  [UsersRound, "Grupo no WhatsApp com os materiais do Workshop"],
  [BadgeCheck, "Certificado de participação"],
];

function OfferSection() {
  return (
    <section className="offer-section" id="garanta-sua-vaga">
      <div className="page-shell offer-shell">
        <div className="offer-title">
          <p>05 e 06 • às 19h • ao vivo</p>
          <h2>Garanta sua vaga <em>agora.</em></h2>
          <span>e tenha acesso a uma experiência completa:</span>
        </div>
        <div className="offer-list">
          {offerItems.map(([Icon, label], index) => {
            const ItemIcon = Icon as typeof Video;
            return (
              <div className="offer-item" key={label as string}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <ItemIcon aria-hidden="true" />
                <p>{label as string}</p>
              </div>
            );
          })}
        </div>
        <div className="offer-action">
          <p><strong>Workshop Molde F1</strong><br />Técnica, conteúdo e posicionamento em uma única imersão.</p>
          <CTA label="Quero participar do workshop" light />
          <small><ShieldCheck aria-hidden="true" /> Ambiente de inscrição seguro</small>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="section guarantee-section">
      <div className="page-shell guarantee-grid">
        <div className="guarantee-seal">
          <Image
            src={guaranteeSeal}
            alt="Gravações disponíveis em até 7 dias. Compra segura."
            sizes="(max-width: 700px) 230px, 280px"
          />
        </div>
        <div>
          <h2>Compra segura.<br /><em>Decisão tranquila.</em></h2>
          <p>Você terá suporte para acessar a experiência e os materiais previstos. As regras de cancelamento foram deixadas claras para que sua decisão seja feita com confiança, sem letras miúdas.</p>
          <small>O cancelamento pode ser solicitado em até 2 dias após o término do evento online. Consulte os detalhes nas dúvidas frequentes.</small>
        </div>
        <ShieldCheck className="guarantee-icon" aria-hidden="true" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about-section">
      <div className="page-shell about-grid">
        <div className="about-visual">
          <AssetFrame asset={aboutChaiane} alt="Chaiane Pasquali, Nail Designer e educadora" label="Foto de autoridade da Chaiane" className="about-photo" />
          <div className="experience-stamp"><strong>8 anos</strong><span>de experiência como Nail Designer</span></div>
        </div>
        <div className="about-copy">
          <h2>Quem é<br /><em>Chaiane Pasquali?</em></h2>
          <p>Nail Designer há 8 anos e educadora na área de alongamento de unhas. Sua paixão pela técnica e pelos resultados fez com que, já no segundo ano de atendimentos, começasse a ministrar cursos presenciais.</p>
          <p>É criadora do curso Método Nail do Futuro, no qual apresentou a evolução da fibra de vidro ao Molde F1, trazendo mais praticidade, agilidade, simetria e precisão para o universo Nail.</p>
          <p>Hoje, une técnica e inovação para ajudar profissionais a conquistarem mais segurança, valorizarem o próprio trabalho e transformarem a maneira como se posicionam no mercado.</p>
          <div className="authority-signature">Chaiane Pasquali <span>Instrutora Master</span></div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Vai ter certificado?", "Com certeza! Todos que participarem dos dois dias de Workshop, ao vivo, poderão solicitar o certificado de participação, que será enviado em até 7 dias após o final do evento."],
  ["O ingresso para o evento inclui as gravações?", "Sim. As gravações ficarão disponíveis em até 7 dias após o evento."],
  ["Para quem é este Workshop?", "Este Workshop é perfeito para você que é Nail Designer iniciante ou já formada, mas ainda não fatura o quanto merece; quer aprender técnicas exclusivas e entregar um acabamento de alto padrão; precisa lotar a agenda e fidelizar clientes; busca profissionalização e crescimento; ou quer um plano mais claro para ampliar seus resultados. Se deseja se destacar e construir uma carreira sólida na área, este evento é para você."],
  ["Posso pedir reembolso?", "Sim! Você pode solicitar o cancelamento do seu ingresso em até 2 dias após o término do evento online, sem burocracia."],
];

function FAQSection() {
  return (
    <section className="section faq-section">
      <div className="page-shell faq-grid">
        <div className="faq-title">
          <h2>Dúvidas<br /><em>frequentes.</em></h2>
          <p>Tudo o que você precisa saber antes de garantir sua vaga.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{question}</span><ChevronDown aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="final-cta">
      <Image className="final-watermark" src={brandLogo} alt="" aria-hidden="true" />
      <div className="final-orbit orbit-one" aria-hidden="true" />
      <div className="final-orbit orbit-two" aria-hidden="true" />
      <div className="page-shell final-content">
        <Sparkles aria-hidden="true" />
        <h2>Eleve sua técnica.<br />Amplie sua presença.</h2>
        <p>Participe ao vivo com Chaiane Pasquali e aprenda a transformar precisão em valor percebido.</p>
        <CTA label="Quero garantir minha vaga" light />
        <span>05 e 06 • às 19h • ao vivo</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="page-shell footer-row">
        <Image className="footer-logo" src={brandLogoWhite} alt="Lapidando Nails" />
        <a href="#inicio">Voltar ao início <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <main className="landing">
      <div className="page-progress" aria-hidden="true" />
      <HeroSection />
      <PainPointsSection />
      <TransformationSection />
      <ContentStrategySection />
      <BenefitsSection />
      <ProofSection />
      <OfferSection />
      <GuaranteeSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

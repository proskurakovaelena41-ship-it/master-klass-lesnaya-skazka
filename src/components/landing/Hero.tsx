import { useState } from "react";
import Icon from "@/components/ui/icon";
import { TELEGRAM_URL, WHATSAPP_URL, scrollToId } from "./contacts";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/5ca54c32-cfcb-4b45-a1f6-1ed34cb4c254/files/6831d703-ea25-4f04-b9e8-8a4624570c41.jpg";

const menu = [
  { label: "Для кого", id: "for-whom" },
  { label: "Как проходит", id: "steps" },
  { label: "Галерея", id: "gallery" },
  { label: "Записаться", id: "signup" },
];

const minor = [
  { title: "Лесной венок", sub: "Можжевельник и ветки" },
  { title: "Чай из лесных трав", sub: "Свечи с лавандой" },
  { title: "Пара часов тишины", sub: "Без телефона и дедлайнов" },
];

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const go = (id: string, i?: number) => {
    if (typeof i === "number") setActive(i);
    setOpen(false);
    scrollToId(id);
  };

  return (
    <div className="flex h-[100svh] max-h-[980px] min-h-[680px] flex-col">
      <div className="flex min-h-9 items-center justify-center bg-bar px-4 py-1.5 text-center text-[0.87em] tracking-[0.01em] text-bar-foreground">
        Ближайшая встреча — всего 6 мест за столом, чтобы каждой уделить внимание
      </div>

      <div className="hidden h-10 items-center justify-between bg-strip px-[18px] text-[0.93em] text-strip-foreground md:flex">
        <p className="flex items-center gap-[9px]">
          <span
            aria-hidden
            className="h-3.5 w-3.5 rounded-full bg-glow shadow-[inset_0_0_0_2px_hsl(var(--strip)/0.55),0_0_0_1px_hsl(var(--glow)/0.6)]"
          />
          Мастерская Елены · флорариумы и лесные венки
        </p>
        <ul className="flex gap-[29px]">
          <li><button onClick={() => go("for-whom")} className="hover:opacity-70 transition-opacity">Для кого</button></li>
          <li><button onClick={() => go("steps")} className="hover:opacity-70 transition-opacity">Как проходит</button></li>
          <li><a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">Telegram</a></li>
          <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">WhatsApp</a></li>
        </ul>
      </div>

      <section className="hero-glow relative flex-1 overflow-hidden">
        <div aria-hidden className="hero-photo-mask absolute inset-y-0 right-0 w-full bg-glow-deep md:w-[68%]">
          <img src={HERO_IMG} alt="" className="h-full w-full object-cover opacity-45 md:opacity-100" style={{ objectPosition: "50% 60%" }} />
        </div>
        <div aria-hidden className="hero-shade pointer-events-none absolute inset-0" />

        <header className="relative z-20 mx-[18px] grid h-[72px] grid-cols-[1fr_auto] items-center border-b border-foreground/75 lg:grid-cols-[1fr_auto_1fr]">
          <a href="#" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <span className="font-head text-[1.9em] font-medium leading-none tracking-[-0.03em]">Лс</span>
            <span aria-hidden className="h-[22px] w-px bg-foreground" />
            <span className="font-head text-[1.6em] italic leading-none">Лесная сказка</span>
          </a>

          <ul className="hidden gap-[22px] lg:flex">
            {menu.map((m, i) => (
              <li key={m.id}>
                <button
                  onClick={() => go(m.id, i)}
                  className={`inline-flex items-center gap-2 rounded-[3px] px-2 py-[7px] text-[0.97em] font-medium transition-colors hover:bg-pill ${active === i ? "bg-pill" : ""}`}
                >
                  {m.label} <span className="font-normal">+</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-7 justify-self-end text-[0.97em] font-medium lg:flex">
            <Icon name="Search" size={15} />
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Написать</a>
            <button onClick={() => go("signup")} className="hover:text-primary transition-colors">Мест (6)</button>
          </div>

          <button
            className="justify-self-end p-2 lg:hidden"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "X" : "Menu"} size={24} />
          </button>
        </header>

        {open && (
          <div className="animate-fade-in absolute inset-x-[18px] top-[72px] z-30 border-b border-foreground/30 bg-background/95 backdrop-blur lg:hidden">
            <ul className="flex flex-col py-4">
              {menu.map((m, i) => (
                <li key={m.id}>
                  <button onClick={() => go(m.id, i)} className="w-full py-3 text-left font-head text-2xl italic">
                    {m.label}
                  </button>
                </li>
              ))}
              <li className="mt-3 flex gap-6 text-[0.93em] text-muted-foreground">
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
              </li>
            </ul>
          </div>
        )}

        <p className="absolute left-[18px] top-1/2 z-10 hidden translate-y-[30px] text-[0.87em] font-medium uppercase tracking-[0.02em] xl:block">
          Мастер-классы
        </p>

        <div className="relative z-10 flex flex-col gap-10 px-[18px] pb-24 pt-10 md:pl-[18px] md:pt-9 xl:pl-[246px]">
          <div className="rise max-w-[760px]">
            <h1 className="font-head text-[44px] font-medium italic leading-[1.02] tracking-[-0.01em] drop-shadow-[0_2px_24px_hsl(var(--background)/0.8)] md:text-[68px]">
              Уютные мастер-классы по созданию <span className="text-primary">флорариумов и венков</span> своими руками
            </h1>
            <p className="mt-5 max-w-[480px] leading-[1.45] tracking-[0.01em] text-foreground/85">
              Создай вечную композицию из мха и сухоцветов. Выдохни, выпей горячего травяного чая и наполни дом уютом, который не требует полива.
            </p>
            <button onClick={() => go("signup")} className="editorial-link mt-[18px]">
              Подарить себе творческий отдых
            </button>
          </div>

          <ul className="grid max-w-[640px] gap-7 sm:grid-cols-3">
            {minor.map((f, i) => (
              <li key={f.title} className="rise" style={{ animationDelay: `${0.12 * (i + 1)}s` }}>
                <p className="font-head text-[1.45em] italic leading-[1.1] text-muted-foreground">{f.title}</p>
                <p className="mt-[9px] leading-[1.35] tracking-[0.02em] text-muted-foreground">{f.sub}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="absolute bottom-5 right-[22px] z-10 font-head text-[1.05em] italic text-foreground opacity-80">
          Флорариум · бархатный мох, сухоцветы, стекло
        </p>
      </section>
    </div>
  );
};

export default Hero;
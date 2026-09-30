import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "./useReveal";

const steps = [
  {
    icon: "Coffee",
    title: "Уютное знакомство",
    text: "Ты входишь, и тебя сразу окутывает аромат чая из лесных трав. На столе горят свечи с нежным запахом лаванды, а рядом лежат свежие ветки можжевельника. Мы устраиваемся поудобнее, болтаем и настраиваемся на творчество.",
    note: "Чай из лесных трав · лаванда · можжевельник",
  },
  {
    icon: "Leaf",
    title: "Выбор сокровищ",
    text: "Перед тобой раскладываются настоящие лесные богатства: нежные сухоцветы, изящно изогнутые ветки и зеленый бархатный мох. Ты выбираешь именно те детали, которые отзываются в твоем сердце.",
    note: "Сухоцветы · изогнутые ветки · бархатный мох",
  },
  {
    icon: "Sparkles",
    title: "Магия творчества",
    text: "Природа не знает шаблонов и не терпит скуки — здесь нет «правильных» и «неправильных» решений. Я мягко направлю твои руки, покажу каждый прием, а ты просто доверься себе. Мы здесь не для того, чтобы следовать правилам, а чтобы почувствовать звуки леса и вдохнуть аромат его красок.",
    note: "Без шаблонов · мастер рядом",
  },
  {
    icon: "Gift",
    title: "Возвращение в сказку",
    text: "Ты вложила в свою работу все чувства, эмоции и преодолела свои страхи. Мы красиво упакуем твой шедевр, сделаем стильные фото, а ты уйдешь домой с ощущением, что на пару часов переключилась из реального мира в мир настоящей сказки.",
    note: "Упаковка · стильные фото · работа на годы",
  },
];

const Steps = () => {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLElement>();
  const s = steps[active];

  return (
    <section id="steps" ref={ref} className="relative scroll-mt-4 overflow-hidden border-t border-border bg-card/40 px-[18px] py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-glow/20 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="reveal flex items-center gap-4 text-[0.87em] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span>Рубрика 02</span>
          <span className="h-px flex-1 bg-border" />
          <span className="hidden sm:inline">4 шага</span>
        </div>
        <h2 className="reveal mt-6 max-w-3xl font-head text-[44px] italic leading-[1.05] md:text-[60px]">
          Как проходит мастер-класс
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <ol className="reveal md:col-span-5">
            {steps.map((st, i) => (
              <li key={st.title} className="border-t border-border last:border-b">
                <button
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-5 py-5 text-left"
                  aria-pressed={active === i}
                >
                  <span className={`font-head text-[1.1em] italic transition-colors ${active === i ? "text-primary" : "text-muted-foreground"}`}>
                    Шаг {i + 1}
                  </span>
                  <span
                    className={`font-head text-[28px] italic leading-tight transition-all duration-300 md:text-[32px] ${
                      active === i ? "translate-x-1 text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {st.title}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <article key={active} className="animate-fade-in md:col-span-6 md:col-start-7">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 text-primary">
                <Icon name={s.icon} size={24} />
              </span>
              <span className="font-head text-[80px] italic leading-none text-foreground/10">0{active + 1}</span>
            </div>
            <h3 className="mt-6 font-head text-[36px] italic leading-tight">
              Шаг {active + 1}. {s.title}
            </h3>
            <p className="mt-6 leading-[1.65] text-foreground/90">{s.text}</p>
            <p className="mt-8 border-t border-border pt-4 font-head text-[1.1em] italic text-muted-foreground">
              {s.note}
            </p>

            <div className="mt-8 flex items-center gap-6 text-[0.9em]">
              <button
                onClick={() => setActive((active + steps.length - 1) % steps.length)}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon name="ArrowLeft" size={16} /> Назад
              </button>
              <button
                onClick={() => setActive((active + 1) % steps.length)}
                className="editorial-link flex items-center gap-2"
              >
                Следующий шаг <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Steps;

import Icon from "@/components/ui/icon";
import { TELEGRAM_URL, scrollToId } from "./contacts";
import { useReveal } from "./useReveal";

const included = [
  { icon: "Leaf", text: "Все материалы: мох, сухоцветы, ветки, стекло" },
  { icon: "Coffee", text: "Чай из лесных трав" },
  { icon: "Gift", text: "Красивая упаковка работы" },
  { icon: "Camera", text: "Стильные фото твоей работы" },
];

const plans = [
  {
    num: "I",
    title: "Флорариум",
    price: "3 500 ₽",
    note: "Вечная композиция под стеклом, которая не требует полива",
    details: ["2–2,5 часа", "до 6 человек"],
    featured: false,
  },
  {
    num: "II",
    title: "Лесной венок",
    price: "4 000 ₽",
    note: "Венок из можжевельника, мха и сухоцветов, который простоит годами",
    details: ["2,5–3 часа", "до 6 человек"],
    featured: true,
  },
  {
    num: "III",
    title: "Подарочный сертификат",
    price: "от 3 500 ₽",
    note: "Подари близкой пару часов тишины и творчества — она сама выберет дату",
    details: ["на любой мастер-класс", "действует 6 месяцев"],
    featured: false,
  },
];

const Prices = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="prices" ref={ref} className="relative scroll-mt-4 px-[18px] py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex items-center gap-4 text-[0.87em] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span>Рубрика 04</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="reveal font-head text-[44px] italic leading-[1.05] md:col-span-7 md:text-[60px]">
            Стоимость
          </h2>
          <p className="reveal leading-[1.6] text-foreground/90 md:col-span-5">
            Никаких доплат на месте — всё, что нужно для твоего маленького чуда, уже включено.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.title}
              className={`reveal relative flex flex-col rounded-[3px] border p-7 transition-colors md:p-8 ${
                p.featured ? "border-primary bg-card" : "border-border bg-card/50 hover:bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-[3px] bg-primary px-3 py-1 text-[0.75em] font-medium uppercase tracking-[0.15em] text-primary-foreground">
                  Любимый у гостей
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <span className="font-head text-[1.4em] italic text-muted-foreground">{p.num}</span>
                <span className="text-[0.8em] text-muted-foreground">{p.details.join(" · ")}</span>
              </div>
              <h3 className="mt-6 font-head text-[34px] italic leading-[1.1]">{p.title}</h3>
              <p className="mt-3 text-[0.93em] leading-[1.55] text-foreground/80">{p.note}</p>
              <div className="mt-auto pt-8">
                <div className="h-px bg-border" />
                <p className="mt-6 font-head text-[46px] leading-none">{p.price}</p>
                <div className="mt-6">
                  {p.title === "Подарочный сертификат" ? (
                    <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="editorial-link">
                      Заказать сертификат
                    </a>
                  ) : (
                    <button onClick={() => scrollToId("signup")} className="editorial-link">
                      Записаться
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 rounded-[3px] border border-border p-7 md:p-9">
          <p className="font-head text-[28px] italic leading-tight">В стоимость входит</p>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((i) => (
              <li key={i.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Icon name={i.icon} size={17} />
                </span>
                <span className="text-[0.93em] leading-[1.45] text-foreground/90">{i.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prices;

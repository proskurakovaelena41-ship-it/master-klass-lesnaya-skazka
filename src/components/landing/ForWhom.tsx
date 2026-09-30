import { useReveal } from "./useReveal";

const IMG =
  "https://cdn.poehali.dev/projects/5ca54c32-cfcb-4b45-a1f6-1ed34cb4c254/files/f66965dc-0b89-4633-b7a4-e1fcbfe0fbb7.jpg";

const ForWhom = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="for-whom" ref={ref} className="relative scroll-mt-4 px-[18px] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <div className="reveal flex items-center gap-4 text-[0.87em] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span>Рубрика 01</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="reveal mt-6 font-head text-[44px] italic leading-[1.05] md:text-[60px]">
            Для кого это
          </h2>

          <figure className="reveal mt-10 hidden md:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[3px] bg-card">
              <img src={IMG} alt="Создание флорариума из мха при свечах" className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105" />
            </div>
            <figcaption className="mt-3 font-head text-[1.05em] italic text-muted-foreground">
              Свечи с лавандой, мох и тёплый свет
            </figcaption>
          </figure>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <p className="reveal font-head text-[30px] italic leading-[1.25] md:text-[38px]">
            <span className="float-left mr-3 mt-1 font-head text-[88px] not-italic leading-[0.8] text-primary md:text-[110px]">
              Т
            </span>
            ы хочешь отдохнуть головой.
          </p>
          <div className="reveal mt-8 h-px w-24 bg-primary" />
          <p className="reveal mt-8 leading-[1.6] text-foreground/90">
            Устала от экрана телефона, дедлайнов и городского шума. Тебе нужно пару часов тишины, творчества и аромата хвои, чтобы перезагрузиться и почувствовать себя живой.
          </p>

          <dl className="reveal mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="font-head text-[44px] italic leading-none">6</dt>
              <dd className="mt-2 text-[0.8em] leading-snug text-muted-foreground">мест за столом</dd>
            </div>
            <div>
              <dt className="font-head text-[44px] italic leading-none">2</dt>
              <dd className="mt-2 text-[0.8em] leading-snug text-muted-foreground">часа тишины</dd>
            </div>
            <div>
              <dt className="font-head text-[44px] italic leading-none">0</dt>
              <dd className="mt-2 text-[0.8em] leading-snug text-muted-foreground">поливов в год</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
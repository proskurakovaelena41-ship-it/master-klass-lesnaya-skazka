import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useReveal } from "./useReveal";

const items = [
  {
    src: "https://cdn.poehali.dev/projects/5ca54c32-cfcb-4b45-a1f6-1ed34cb4c254/files/6831d703-ea25-4f04-b9e8-8a4624570c41.jpg",
    caption: "Флорариум · бархатный мох, сухоцветы, стекло",
  },
  {
    src: "https://cdn.poehali.dev/projects/5ca54c32-cfcb-4b45-a1f6-1ed34cb4c254/files/00e227c3-31c4-464d-9852-7f4f5535e741.jpg",
    caption: "Лесной венок · можжевельник, ветки, лаванда",
  },
  {
    src: "https://cdn.poehali.dev/projects/5ca54c32-cfcb-4b45-a1f6-1ed34cb4c254/files/f66965dc-0b89-4633-b7a4-e1fcbfe0fbb7.jpg",
    caption: "Мастерская · чай, свечи и тишина",
  },
];

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal<HTMLElement>();

  return (
    <section id="gallery" ref={ref} className="scroll-mt-4 px-[18px] py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex items-center gap-4 text-[0.87em] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span>Рубрика 03</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="reveal mt-6 font-head text-[44px] italic leading-[1.05] md:text-[60px]">
          Кусочек леса, который можно унести домой
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {items.map((it, i) => (
            <figure
              key={it.src}
              className={`reveal ${i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <button
                onClick={() => setOpen(i)}
                className={`group block w-full overflow-hidden rounded-[3px] bg-card ${i === 0 ? "aspect-[4/5]" : "aspect-[16/11]"}`}
                aria-label={`Открыть фото: ${it.caption}`}
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  loading="lazy"
                />
              </button>
              <figcaption className="mt-3 font-head text-[1.05em] italic text-muted-foreground">{it.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl border-border bg-background p-3">
          <DialogTitle className="sr-only">{open !== null ? items[open].caption : "Фото"}</DialogTitle>
          {open !== null && (
            <figure>
              <img src={items[open].src} alt={items[open].caption} className="max-h-[80vh] w-full rounded-[3px] object-contain" />
              <figcaption className="px-1 pb-1 pt-3 font-head text-[1.1em] italic text-muted-foreground">
                {items[open].caption}
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

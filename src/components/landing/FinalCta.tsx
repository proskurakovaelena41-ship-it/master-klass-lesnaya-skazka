import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TELEGRAM_URL, WHATSAPP_URL } from "./contacts";
import { useReveal } from "./useReveal";

const FinalCta = () => {
  const [open, setOpen] = useState(false);
  const ref = useReveal<HTMLElement>();

  return (
    <section id="signup" ref={ref} className="hero-glow relative scroll-mt-4 overflow-hidden px-[18px] pb-28 pt-24 md:pb-40 md:pt-32">
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="reveal text-[0.87em] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Запись на мастер-класс
        </p>
        <h2 className="reveal mt-6 font-head text-[46px] italic leading-[1.05] md:text-[72px]">
          Готовы вдохнуть аромат лесных красок?
        </h2>
        <p className="reveal mx-auto mt-8 max-w-xl leading-[1.6] text-foreground/90">
          Сделай первый шаг навстречу своему творчеству. Напиши мне, и мы вместе подберем идеальную дату для твоего маленького чуда.
        </p>

        <div className="reveal mt-10">
          <button onClick={() => setOpen(true)} className="editorial-link text-[1.15em]">
            Хочу на мастер-класс
          </button>
        </div>

        <p className="reveal mt-10 text-[0.87em] text-muted-foreground">
          Отвечаю в течение часа. Спроси всё, что тебя волнует, в{" "}
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary">
            Telegram
          </a>{" "}
          или{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary">
            WhatsApp
          </a>
          !
        </p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-border bg-card sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-head text-[34px] font-normal italic leading-tight">
              Где удобнее написать?
            </DialogTitle>
            <DialogDescription className="text-[0.85em] text-muted-foreground">
              Отвечаю в течение часа. Мест всего 6, чтобы каждой уделить внимание.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 grid gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[3px] bg-primary px-5 py-4 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span className="flex items-center gap-3"><Icon name="Send" size={18} /> Telegram</span>
              <Icon name="ArrowUpRight" size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[3px] border border-border px-5 py-4 font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-3"><Icon name="MessageCircle" size={18} /> WhatsApp</span>
              <Icon name="ArrowUpRight" size={18} />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FinalCta;

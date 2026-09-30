import { TELEGRAM_URL, WHATSAPP_URL } from "./contacts";

const Footer = () => (
  <footer className="border-t border-border px-[18px] py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div className="flex items-center gap-3">
        <span className="font-head text-[1.6em] font-medium leading-none tracking-[-0.03em]">Лс</span>
        <span aria-hidden className="h-[20px] w-px bg-foreground" />
        <span className="font-head text-[1.35em] italic leading-none">Лесная сказка</span>
      </div>
      <p className="font-head text-[1.05em] italic text-muted-foreground">
        Мастерская Елены · флорариумы и лесные венки
      </p>
      <div className="flex gap-6 text-[0.9em]">
        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Telegram</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
      </div>
    </div>
  </footer>
);

export default Footer;

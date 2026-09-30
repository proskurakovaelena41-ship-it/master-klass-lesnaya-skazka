export const TELEGRAM_URL = "https://t.me/";
export const WHATSAPP_URL = "https://wa.me/";

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

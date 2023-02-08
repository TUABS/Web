export const today = new Date().toISOString().slice(0, 10);
export const yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
).toISOString().slice(0, 10);
export const tomorrow = new Date(
    new Date().setDate(new Date().getDate() + 1)
).toISOString().slice(0, 10);

export function ago(time) {
    const now = new Date();
    const then = new Date(time);
    const diff = now - then;
    const seconds = Math.round(diff / 1000);
    const minutes = Math.round(diff / 1000 / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = Math.round(months / 12);
    if (years > 0) return `${years} yıl önce`;
    if (months > 0) return `${months} ay önce`;
    if (days > 0) return `${days} gün önce`;
    if (hours > 0) return `${hours} saat önce`;
    if (minutes > 0) return `${minutes} dakika önce`;
    if (seconds > 0) return `${seconds} saniye önce`;
    else return "Şimdi";

}
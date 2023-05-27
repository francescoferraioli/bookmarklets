export function getDaysDiffBetweenTwoDates(from: Date, to: Date) {
  const difference = to.getTime() - from.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24));
}

export function getBusinessDaysDiffBetweenTwoDates(from: Date, to: Date) {
  if (to < from) return 0;

  const millisecondsPerDay = 86400 * 1000;
  from.setHours(0, 0, 0, 1);
  to.setHours(23, 59, 59, 999);
  const diff = to.getTime() - from.getTime();
  let days = Math.ceil(diff / millisecondsPerDay);

  const weeks = Math.floor(days / 7);
  days -= weeks * 2;

  const startDay = from.getDay();
  const endDay = to.getDay();

  if (startDay - endDay > 1) days -= 2;

  if (startDay === 0 && endDay !== 6) {
    days -= 1;
  }

  if (endDay === 6 && startDay !== 0) {
    days -= 1;
  }

  return days;
}

export async function copyTitle() {
  await navigator.clipboard.writeText(document.title);
}

export async function openOneNote() {
  await navigator.clipboard
    .readText()
    .then((x) => x.split("\n")[0])
    .then((x) => window.open(x));
}

export async function wait(timeout: number) {
  await new Promise((r) => {
    setTimeout(r, timeout);
  });
}

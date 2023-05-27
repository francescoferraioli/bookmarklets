import {
  getBusinessDaysDiffBetweenTwoDates,
  getDaysDiffBetweenTwoDates,
} from "../../util/util";

function getAllHistoryEntries() {
  return Array.from(
    document.querySelectorAll<HTMLDivElement>(
      '[data-testid="issue-history.ui.feed-container"] > div'
    )
  );
}

function getAllStateTransitionsInHistoryEntry(x: Element) {
  return Array.from(
    x.querySelectorAll<HTMLElement>(
      '[data-testid="common.components.status-lozenge.status-lozenge"]'
    )
  );
}

function getDateTimeOfHistoryEntry(x: Element) {
  return x.querySelector<HTMLSpanElement>(
    '[data-testid="issue-history.ui.feed-container"] > div > div:nth-child(2) > div > span:last-child'
  )!.innerText;
}

function getDateTimeFromTransition(
  firstLast: string,
  fromTo: string,
  status: string
) {
  const getFromTo: (x: HTMLElement[]) => HTMLElement =
    fromTo === "from" ? (x) => x[0] : (x) => x.reverse()[0];
  const getFirstLast: (x: HTMLElement[]) => HTMLElement =
    firstLast === "first" ? (x) => x.reverse()[0] : (x) => x[0];

  const statusTransitions = getAllHistoryEntries().filter(
    (entry) =>
      getFromTo(getAllStateTransitionsInHistoryEntry(entry))?.innerText ===
      status
  );

  return getDateTimeOfHistoryEntry(getFirstLast(statusTransitions));
}

function getDateTimeFirstFromToDo() {
  return getDateTimeFromTransition("first", "from", "TO DO");
}

function getDateTimeLastToDone() {
  return getDateTimeFromTransition("last", "to", "DONE");
}

function parseDateTime(s: string) {
  const { month, day, year, hr, min, amPm } = s.match(
    /^(?<month>\S+) (?<day>\d+), (?<year>\d+) at (?<hr>\d+):(?<min>\d+) (?<amPm>AM|PM)$/
  )!.groups! as unknown as {
    month: string;
    day: number;
    year: number;
    hr: number;
    min: number;
    amPm: string;
  };
  return new Date(
    year,
    getMonthIndexFromString(month),
    day,
    hr + (amPm.toLowerCase() === "am" ? 0 : 12),
    min,
    0
  );
}

function getMonthIndexFromString(x: string) {
  return new Date(Date.parse(`${x} 1, 2012`)).getMonth();
}

function getDaysCycleTime() {
  return getDaysDiffBetweenTwoDates(
    parseDateTime(getDateTimeFirstFromToDo()),
    parseDateTime(getDateTimeLastToDone())
  );
}

function getBusinessDaysCycleTime() {
  return getBusinessDaysDiffBetweenTwoDates(
    parseDateTime(getDateTimeFirstFromToDo()),
    parseDateTime(getDateTimeLastToDone())
  );
}

export default () => {
  const [num, ...rest] = document.title.split(" ");
  const title = rest.slice(0, -2).join(" ");
  const days = getDaysCycleTime();
  const business = getBusinessDaysCycleTime();

  return { num, title, days, business };
};

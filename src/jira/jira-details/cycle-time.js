function getAllHistoryEntries() {
	return Array.from(document.querySelectorAll('[data-testid="issue-history.ui.feed-container"] > div'));
}

function getAllStateTransitionsInHistoryEntry(x) {
  return Array.from(x.querySelectorAll('[data-testid="common.components.status-lozenge.status-lozenge"]'));
}

function getDateTimeOfHistoryEntry(x) {
  return x.querySelector('[data-testid="issue-history.ui.feed-container"] > div > div:nth-child(2) > div > span:last-child').innerText;
}

function getDateTimeFromTransition(firstLast, fromTo, status) {
  const getFromTo = fromTo === 'from' ? (x) => x[0] : (x) => x.reverse()[0];
  const getFirstLast = firstLast === 'first' ? (x) => x.reverse()[0] : (x) => x[0];

  const statusTransitions = getAllHistoryEntries()
    .filter(entry => getFromTo(getAllStateTransitionsInHistoryEntry(entry))?.innerText === status);

  return getDateTimeOfHistoryEntry(getFirstLast(statusTransitions));
}

function getDateTimeFirstFromToDo() {
  return getDateTimeFromTransition('first', 'from', "TO DO");
}

function getDateTimeLastToDone() {
  return getDateTimeFromTransition('last', 'to', "DONE");
}

function parseDateTime(s) {
  const { month, day, year, hr, min, amPm} = s.match(/^(?<month>\S+) (?<day>\d+), (?<year>\d+) at (?<hr>\d+):(?<min>\d+) (?<amPm>AM|PM)$/).groups;
  return new Date(year, getMonthIndexFromString(month), day, parseInt(hr) + (amPm.toLowerCase() === 'am' ? 0 : 12), min, 0);
}

function getMonthIndexFromString(x) {
  return new Date(Date.parse(x + " 1, 2012")).getMonth();
}

function getDaysCycleTime() {
  return getDaysDiffBetweenTwoDates(parseDateTime(getDateTimeFirstFromToDo()), parseDateTime(getDateTimeLastToDone()));
}

{{> util__getDaysDiffBetweenTwoDates }}

function getBusinessDaysCycleTime() {
  return getBusinessDaysDiffBetweenTwoDates(parseDateTime(getDateTimeFirstFromToDo()), parseDateTime(getDateTimeLastToDone()));
}

{{> util__getBusinessDaysDiffBetweenTwoDates }}

const [num, ...rest] = document.title.split(" ");
const title = rest.slice(0, -2).join(" ");
const days = getDaysCycleTime();
const business = getBusinessDaysCycleTime();

navigator.clipboard.writeText(JSON.stringify({ num, title, days, business}));

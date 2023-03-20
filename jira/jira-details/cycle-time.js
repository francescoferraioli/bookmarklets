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

function getDaysDiffBetweenTwoDates(from, to) {
  const difference = to.getTime() - from.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24));
}

function getBusinessDaysCycleTime() {
  return getBusinessDaysDiffBetweenTwoDates(parseDateTime(getDateTimeFirstFromToDo()), parseDateTime(getDateTimeLastToDone()));
}

function getBusinessDaysDiffBetweenTwoDates(from, to) {
  if (to < from)
      return 0;

  var millisecondsPerDay = 86400 * 1000;
  from.setHours(0,0,0,1);
  to.setHours(23,59,59,999);
  var diff = to - from;
  var days = Math.ceil(diff / millisecondsPerDay);

  var weeks = Math.floor(days / 7);
  days = days - (weeks * 2);

  var startDay = from.getDay();
  var endDay = to.getDay();

  if (startDay - endDay > 1)
      days = days - 2;

  if (startDay == 0 && endDay != 6) {
      days = days - 1;
  }

  if (endDay == 6 && startDay != 0) {
      days = days - 1;
  }

  return days;
}

const [num, ...rest] = document.title.split(" ");
const title = rest.slice(0, -2).join(" ");
const days = getDaysCycleTime();
const business = getBusinessDaysCycleTime();

navigator.clipboard.writeText(JSON.stringify({ num, title, days, business}));

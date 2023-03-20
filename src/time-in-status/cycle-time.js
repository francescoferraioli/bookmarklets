function getDateTimeForTransition(pseudoClass) {
  return document.querySelector(`table tr:${pseudoClass} td > datetime`).innerText;
}

function getDateTimeFirstFromToDo() {
  return getDateTimeForTransition("nth-child(2)");
}

function getDateTimeLastToDone() {
  return getDateTimeForTransition("last-child");
}

function parseDateTime(s) {
  return new Date(s);
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

const num = document.location.search.match(/^\?issueKey=([^&]+)/)[1];
const days = getDaysCycleTime();
const business = getBusinessDaysCycleTime();

navigator.clipboard.writeText(JSON.stringify({ num, days, business}));

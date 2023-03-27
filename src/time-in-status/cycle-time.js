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

{{> util__getDaysDiffBetweenTwoDates }}

function getBusinessDaysCycleTime() {
  return getBusinessDaysDiffBetweenTwoDates(parseDateTime(getDateTimeFirstFromToDo()), parseDateTime(getDateTimeLastToDone()));
}

{{> util__getBusinessDaysDiffBetweenTwoDates }}

const num = document.location.search.match(/^\?issueKey=([^&]+)/)[1];
const days = getDaysCycleTime();
const business = getBusinessDaysCycleTime();

navigator.clipboard.writeText(JSON.stringify({ num, days, business}));

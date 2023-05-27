import {
  getBusinessDaysDiffBetweenTwoDates,
  getDaysDiffBetweenTwoDates,
} from "../util/util";

function getDateTimeForTransition(pseudoClass: string) {
  return document.querySelector<HTMLElement>(
    `table tr:${pseudoClass} td > datetime`
  )!.innerText;
}

function getDateTimeFirstFromToDo() {
  return getDateTimeForTransition("nth-child(2)");
}

function getDateTimeLastToDone() {
  return getDateTimeForTransition("last-child");
}

function parseDateTime(s: string) {
  return new Date(s);
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
  const num = document.location.search.match(/^\?issueKey=([^&]+)/)![1];
  const days = getDaysCycleTime();
  const business = getBusinessDaysCycleTime();

  return { num, days, business };
};

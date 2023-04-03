function getBusinessDaysDiffBetweenTwoDates(from, to) {
  if (to < from) return 0;

  var millisecondsPerDay = 86400 * 1000;
  from.setHours(0, 0, 0, 1);
  to.setHours(23, 59, 59, 999);
  var diff = to - from;
  var days = Math.ceil(diff / millisecondsPerDay);

  var weeks = Math.floor(days / 7);
  days = days - weeks * 2;

  var startDay = from.getDay();
  var endDay = to.getDay();

  if (startDay - endDay > 1) days = days - 2;

  if (startDay == 0 && endDay != 6) {
    days = days - 1;
  }

  if (endDay == 6 && startDay != 0) {
    days = days - 1;
  }

  return days;
}

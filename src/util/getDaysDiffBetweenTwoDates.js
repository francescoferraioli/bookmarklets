function getDaysDiffBetweenTwoDates(from, to) {
  const difference = to.getTime() - from.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24));
}

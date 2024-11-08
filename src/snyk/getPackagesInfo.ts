export default () => {
  const packages = Array.from(document.querySelectorAll(`div.package`));
  return packages.map(getPackageInfo).join("\n");
};

function getPackageInfo(p: Element) {
  const packageName = p.querySelector("h3")!.textContent!.trim();
  const packageLink = p.querySelector("a")!.getAttribute("href")!.trim();
  const packageHealth = p
    .querySelector(".package-health-score .number")!
    .textContent!.split("/")[0]
    .trim();
  const stats = Array.from(
    p.querySelectorAll<HTMLSpanElement>(".stats-item dd span:not(:has(*))")
  ).map((s: HTMLSpanElement) => s.textContent!.trim().replace(/,/g, ""));
  const [
    weeklyDownloads,
    lastRelease,
    licence,
    contributors,
    critical,
    ,
    high,
    ,
    medium,
    ,
    low,
  ] = stats;
  return [
    packageName,
    packageLink,
    packageHealth,
    weeklyDownloads,
    lastRelease,
    licence,
    contributors,
    critical,
    high,
    medium,
    low,
  ].join(",");
}

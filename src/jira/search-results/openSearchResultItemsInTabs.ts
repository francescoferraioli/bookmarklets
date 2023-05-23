export default () =>
  Array.from(
    document.querySelectorAll<HTMLAnchorElement>("#issuetable td.summary a")
  )
    .map((x) => x.href)
    .forEach((x) => window.open(x));

export default () => {
  Array.from(
    document.querySelectorAll<HTMLAnchorElement>(
      "#commits_bucket a.Link--primary"
    )
  )
    .map((x) => x.href)
    .forEach((x) => window.open(x));
};

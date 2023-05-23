export default () =>
  Array.from(
    document.querySelectorAll<HTMLAnchorElement>(
      'div[data-test-selector="team-members-list"] > a'
    )
  )
    .map((x) => x.href.split("/").reverse()[0])
    .join(",");

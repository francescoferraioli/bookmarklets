export default () =>
  Array.from(
    document.querySelectorAll<HTMLAnchorElement>(
      'div[aria-label="Starred"] > a'
    )
  );

export default () =>
  Array.from(document.querySelectorAll("nav[aria-label=Breadcrumbs]"))
    .map((x) => x.textContent!)
    .map(extractJiraItemNumbers)
    .filter((x) => x.length > 0)[0]
    .join(", ");

function extractJiraItemNumbers(input: string): string[] {
  const regex = /([A-Z0-9]+-[0-9]+)/g;
  return input.match(regex) ?? [];
}

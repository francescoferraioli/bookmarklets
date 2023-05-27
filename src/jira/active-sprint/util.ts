export function clickAllPbiOfStatus(status: string) {
  Array.from(
    document.querySelectorAll<HTMLElement>(".jira-issue-status-lozenge")
  )
    .filter((x) => x.textContent!.toLowerCase() === status.toLowerCase())
    .map((x) =>
      x
        .closest(".ghx-swimlane-header")!
        .querySelector<HTMLElement>(".ghx-expander")
    )
    .forEach((x) => x!.click());
}

export function selectSprint(sprint: string) {
  const dropdown = $('button[aria-controls="sprintPickerList"]');

  if (dropdown.text().includes(sprint)) return false;

  const sprints = Array.from($("div > ul > li", dropdown.parent()));

  sprints.find((x) => $(x).text().includes(sprint))!.click();

  $(document).click();
  return true;
}

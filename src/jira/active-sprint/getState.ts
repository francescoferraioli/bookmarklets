export interface SwimlaneState {
  status: string;
  expanded: boolean;
  toggle: () => void;
}

function buildState(swimlaneHeader: HTMLDivElement): SwimlaneState {
  return {
    status:
      swimlaneHeader.querySelector(".ghx-info > .jira-issue-status-lozenge")
        ?.textContent ?? "Other",
    expanded: !swimlaneHeader.parentElement!.classList.contains("ghx-closed"),
    toggle: () =>
      swimlaneHeader.querySelector<HTMLElement>(".aui-icon")!.click(),
  };
}

export default () => {
  const swimlanesHeaders = Array.from<HTMLDivElement>(
    document.querySelectorAll(".ghx-swimlane-header")
  );

  return swimlanesHeaders.map(buildState);
};

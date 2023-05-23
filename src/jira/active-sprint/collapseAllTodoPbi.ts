export default () => {
  Array.from($(".ghx-swimlane-header"))
    .filter(
      (x) => $(".ghx-info > .jira-issue-status-lozenge-new", x).length === 1
    )
    .forEach((x) => $(".aui-icon", x).click());
};

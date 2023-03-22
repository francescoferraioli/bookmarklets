function ffBookmarkletRun() {
  $('.ghx-swimlane.ghx-closed .aui-icon').click();

  function closeAllOfStatus(status) {
    {{> jira__active-sprint__click-all-pbi-of-status status="status" }}
  };

  closeAllOfStatus("TODO");
  closeAllOfStatus("DONE");
}

ffBookmarkletRun();

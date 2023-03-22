{{> jira__active-sprint__expand-all-closed-pbi }}

function closeAllOfStatus(status) {
  {{> jira__active-sprint__click-all-pbi-of-status status="status" }}
};

closeAllOfStatus("TODO");
closeAllOfStatus("DONE");

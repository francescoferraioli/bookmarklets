function selectSprint(sprint) {
  const dropdown = $('button[aria-controls="sprintPickerList"]');

  if(dropdown.text().includes(sprint))
    return false;

  const sprints = Array.from($("div > ul > li", dropdown.parent()));

  sprints.find(x => $(x).text().includes(sprint)).click();

  $(document).click();
  return true;
}

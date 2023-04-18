const filters = {{> jira__filters__get-all-starred-filters-object-id-name }}
const textarea = $("textarea#advanced-search")[0]
const replaced = textarea.value
  .replace(/filter\s*=\s*(?<id>\d+)/g, (...x) => {
    const { id } = x.reverse()[0];
    return `filter = "${filters[id]}"`
  })
textarea.value = replaced;

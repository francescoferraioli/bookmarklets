const filters = {{> jira__filters__get-all-starred-filters-object-name-id }}
const textarea = $("textarea#advanced-search")[0]
const replaced = textarea.value
  .replace(/filter\s*=\s*"(?<name>[^"]+)"/g, (...x) => {
    const { name } = x.reverse()[0];
    return `filter=${filters[name]}`
  })
textarea.value = replaced;

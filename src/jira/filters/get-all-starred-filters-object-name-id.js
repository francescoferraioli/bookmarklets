Object.fromEntries(
  {{> jira__filters__get-all-starred-filters-array }}.map(
    (x) => [x.textContent, new URL(x.href).searchParams.get("filter")]
  )
)

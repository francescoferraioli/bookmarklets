Object.fromEntries(
  {{> jira__filters__get-all-starred-filters-array }}.map(
    (x) => [new URL(x.href).searchParams.get("filter"), x.textContent]
  )
)

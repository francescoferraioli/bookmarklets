const output =
  JSON.stringify(
    Object.fromEntries(
      Array.from(document.querySelectorAll('div[aria-label="Starred"] > a')).map(
        (x) => [x.textContent, new URL(x.href).searchParams.get("filter")]
      )
    ),
    undefined,
    2
  );

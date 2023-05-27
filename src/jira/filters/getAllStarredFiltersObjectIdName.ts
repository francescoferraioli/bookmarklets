import getAllStarredFiltersArray from "./getAllStarredFiltersArray";

export default () =>
  Object.fromEntries(
    getAllStarredFiltersArray().map((x) => [
      new URL(x.href).searchParams.get("filter")!,
      x.textContent!,
    ])
  );

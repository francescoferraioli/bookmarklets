import getAllStarredFiltersArray from "./getAllStarredFiltersArray";

export default () =>
  Object.fromEntries(
    getAllStarredFiltersArray().map((x) => [
      x.textContent!,
      new URL(x.href).searchParams.get("filter")!,
    ])
  );

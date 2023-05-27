import getAllStarredFiltersObjectIdName from "./getAllStarredFiltersObjectIdName";

export default () => {
  const filters = getAllStarredFiltersObjectIdName();
  const textarea = $<HTMLTextAreaElement>("textarea#advanced-search")[0];
  const replaced = textarea.value.replace(
    /filter\s*=\s*(?<id>\d+)/g,
    (...x) => {
      const { id } = x.reverse()[0] as { id: string };
      return `filter = "${filters[id]}"`;
    }
  );
  textarea.value = replaced;
};

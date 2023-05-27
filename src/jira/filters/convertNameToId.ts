import getAllStarredFiltersObjectNameId from "./getAllStarredFiltersObjectNameId";

export default () => {
  const filters = getAllStarredFiltersObjectNameId();
  const textarea = $<HTMLTextAreaElement>("textarea#advanced-search")[0];
  const replaced = textarea.value.replace(
    /filter\s*=\s*"(?<name>[^"]+)"/g,
    (...x) => {
      const { name } = x.reverse()[0] as { name: string };
      return `filter=${filters[name]}`;
    }
  );
  textarea.value = replaced;
};

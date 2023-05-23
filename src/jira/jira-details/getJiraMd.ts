export default () => {
  const [jn, ...rest] = document.title.split(" ");
  return `${jn}(${window.location.href}): ${rest.slice(0, -2).join(" ")}`;
};

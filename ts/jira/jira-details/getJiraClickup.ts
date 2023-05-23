export default () => {
  const [jn, ...rest] = document.title.split(" ");
  return `${jn.replace(/^\[(.*)\]/, "$1")}: ${rest.slice(0, -2).join(" ")} (${
    window.location.href
  })`;
};

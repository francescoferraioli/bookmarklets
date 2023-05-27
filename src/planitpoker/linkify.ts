const extractPbiId = (elem: HTMLElement) =>
  /^\[(\S+)\] .*$/.exec($(elem).text())![1];

const clickHandler = (elem: HTMLElement) => (event: MouseEvent) => {
  window.open(`https://numbers.atlassian.net/browse/${extractPbiId(elem)}`);
  event.stopPropagation();
};

export default () =>
  Array.from($(".tab-pane tr td:first-child span")).forEach((elem) => {
    // eslint-disable-next-line no-param-reassign
    elem.onclick = clickHandler(elem);
  });

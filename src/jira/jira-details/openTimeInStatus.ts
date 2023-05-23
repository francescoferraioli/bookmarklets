export default () => {
  window.location.href = document.querySelector<HTMLIFrameElement>(
    "iframe[id*=transition-history-panel]"
  )!.src;
};

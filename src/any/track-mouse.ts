export default () => {
  document.onmousemove = (e) => {
    console.log("mouse location:", e.clientX, e.clientY);
  };
};

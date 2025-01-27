export default () => {
  // eslint-disable-next-line no-alert
  const from = new Date(prompt("Enter date (YYYY-MM-DD):")!);
  const data = Array.from(document.querySelectorAll("tr.test-run"))
    .map((x) => Array.from(x.querySelectorAll("td")))
    .map((x) => ({
      dt: new Date(x[2].textContent!),
      p: x[3].textContent === "Passed",
    }))
    .filter((x) => x.dt >= from);
  const total = data.length;
  const passed = data.filter((x) => x.p).length;
  const failed = data.filter((x) => !x.p).length;
  return {
    total,
    passed,
    failed,
    passRate: ((passed / total) * 100).toFixed(2),
  };
};

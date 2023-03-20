navigator
  .clipboard
  .readText()
  .then(x => x.split('\n')[0])
  .then(x => window.open(x));
Array.from(
	document.querySelectorAll("#issuetable td.summary a")
)
	.map(x => x.href)
  .forEach(x => window.open(x));

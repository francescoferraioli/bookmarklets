Array.from(
	document.querySelectorAll("#commits_bucketa.Link--primary")
)
	.map(x => x.href)
  .forEach(x => window.open(x));
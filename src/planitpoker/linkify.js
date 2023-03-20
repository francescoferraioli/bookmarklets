const extractPbiId = (elem) => /^\[(\S+)\] .*$/.exec($(elem).text())[1];

const clickHandler = (elem) => (event) => {
	window.open(`https://numbers.atlassian.net/browse/${extractPbiId(elem)}`);
	event.stopPropagation(); 
};

Array.from($(".tab-pane tr td:first-child span"))
	.forEach(elem => elem.onclick = clickHandler(elem));
const loadMore = () => {
	const buttons = $(".load-more-row button");
	if(!buttons.length) return;
	buttons.click();
	loadMore();
};

loadMore();
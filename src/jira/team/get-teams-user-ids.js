Array.from(document.querySelectorAll('div[data-test-selector="team-members-list"] > a')).map(x => x.href.split("/").reverse()[0]).join(",")

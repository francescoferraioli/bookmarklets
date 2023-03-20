const [jn, ...rest] = document.title.split(" ");
navigator.clipboard.writeText(`${jn.replace(/^\[(.*)\]/, "$1")}: ${rest.slice(0, -2).join(" ")} (${window.location.href})`);
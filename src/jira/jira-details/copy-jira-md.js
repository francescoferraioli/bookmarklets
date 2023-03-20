const [jn, ...rest] = document.title.split(" ");
navigator.clipboard.writeText(`${jn}(${window.location.href}): ${rest.slice(0, -2).join(" ")}`);
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
$x("//sup/a").forEach((x) => {
  x.innerText = $x(
    `//font/b/a[text()=${x.innerText}]/../../following-sibling::font`
  )[0]
    .innerText.replace(/\n/g, "")
    .trimStart();
});

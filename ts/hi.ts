import { byeWorld, helloWorld } from "./util";

export async function hi() {
  // eslint-disable-next-line no-alert
  alert(helloWorld);
  await new Promise((r) => {
    setTimeout(r, 1000);
  });
  // eslint-disable-next-line no-alert
  alert(byeWorld);
}

import { byeWorld, helloWorld } from "./util";

export async function hi() {
  alert(helloWorld);
  await new Promise((r) => setTimeout(r, 1000));
  alert(byeWorld);
}

import { changeDomain } from "../util/util";

export default () => {
  changeDomain(prompt("New domain")!);
};

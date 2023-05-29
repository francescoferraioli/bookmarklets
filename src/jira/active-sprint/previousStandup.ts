import { reverse } from "../../util/util";
import getState from "./getState";
import { toggleNext } from "./nextStandup";

export default () => {
  toggleNext(reverse(getState()));
};

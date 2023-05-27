import { reverse } from "../../util/util";
import getState, { SwimlaneState } from "./getState";

function findNextIndex(state: SwimlaneState[], lastExpandedIndex: number) {
  return state.findIndex(
    ({ status }, i) =>
      i > lastExpandedIndex &&
      ["In Progress", "Blocked", "Other"]
        .map((x) => x.toLocaleLowerCase())
        .includes(status.toLocaleLowerCase())
  );
}
export default () => {
  const state = getState();
  const lastExpandedIndex =
    state.length - reverse(state).findIndex(({ expanded }) => expanded) - 1;
  let nextIndex = findNextIndex(state, lastExpandedIndex);
  if (nextIndex === -1) nextIndex = findNextIndex(state, 0);
  state.filter(({ expanded }) => expanded).forEach(({ toggle }) => toggle());
  state[nextIndex]?.toggle();
};

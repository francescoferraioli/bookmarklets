import { clickAllPbiOfStatus } from "./util";

function closeAllOfStatus(status) {
  clickAllPbiOfStatus(status);
}

export default () => {
  closeAllOfStatus("TODO");
  closeAllOfStatus("DONE");
  closeAllOfStatus("REJECTED");
};

import { clickAllPbiOfStatus } from "./util";

function closeAllOfStatus(status: string) {
  clickAllPbiOfStatus(status);
}

export default () => {
  closeAllOfStatus("TODO");
  closeAllOfStatus("DONE");
  closeAllOfStatus("REJECTED");
};

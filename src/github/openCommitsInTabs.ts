import { openLinksInTabsWithSelector } from "../util/util";

export default () =>
  openLinksInTabsWithSelector(
    `[data-testid="list-view-items"] [data-testid="list-view-item-title-container"] a`
  );

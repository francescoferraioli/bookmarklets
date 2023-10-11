import { openLinksInTabsWithSelector } from "../../util/util";

export default () =>
  openLinksInTabsWithSelector(
    '[data-testid*="child-issues-panel.issues-container"] a[data-testid*=".key"]'
  );

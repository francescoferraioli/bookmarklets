import { openLinksInTabsWithSelector } from "../util/util";

export default () =>
  openLinksInTabsWithSelector("#commits_bucket a.Link--primary");

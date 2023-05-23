export default () => {
  document
    .querySelector<HTMLElement>(
      '[data-testid="issue-activity-feed.ui.buttons.History"]'
    )!
    .click();
};

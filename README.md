# bookmarklets

1. Run `yarn generate %FILE%`
2. Paste as the URL of a new bookmark

The file will export a default function. This function can return a value.

You can then pass some options to instruct bookmarklets what to do with the value.

Options include:
```
--json: Will convert the value to formatted JSON.
--console: Will output the value to the console.
--alert: Will show the value as an alert on the page.
--clipboard: Will copy the value into your clipboard.
```

You can combine any of these options.
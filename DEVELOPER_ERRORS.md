# Developer Error Log

This app logs technical errors for developers in the browser console and localStorage.

## Where errors are logged
- Console: entries prefixed with `[Dev]`
- localStorage key: `fc_dev_errors`

## Entry format
Each entry is stored as JSON with these fields:
- `time` (ISO string)
- `context` (feature name, e.g. `login-email`)
- `code` (Firebase error code if present)
- `message` (raw error message)
- `stack` (if available)

## How to view
Open DevTools and run:
```js
JSON.parse(localStorage.getItem("fc_dev_errors") || "[]")
```

## Clear the log
```js
localStorage.removeItem("fc_dev_errors")
```
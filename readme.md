## setup

created from github codespace template react, then published to a public repo. then started codespace from the repo.

### localhost preview

In terminal section (bottom right of github codespace vs code editor), click PORTS tab. You could see a table.

Port: Application (3000)
Forwarded Address: https://improved-cod-g4q677rq972w675-3000.app.github.dev/
Running Process: `node /workspaces/react-frictional-winner/node_modules/.bin/vite --port 3000 (2468)
Visibility: private
Origin: Codespaces: improved cod

Click the "Preview in Editor" icon to preview.

## transpile

can use https://babeljs.io to tranpile react code into javascript.

```javascript
function FunctionalComponent() {
    return (
        <h1>a functional component</h1>
    );
}
```

transpiled to

```javascript
import { jsx as _jsx } from "react/jsx-runtime";

function FunctionalComponent() {
  return /*#__PURE__*/_jsx("h1", {
    children: "a functional component"
  });
}
```

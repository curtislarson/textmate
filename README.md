# textmate

This module is a copy of [vscode-textmate](https://github.com/microsoft/vscode-textmate) made a little nicer to use as a deno dependency. It also provides functionality to load and instantiate [vcscode-oniguruma](https://github.com/microsoft/vscode-oniguruma) which is a dependency of `vscode-textmate`.

## Example

```ts
import { vscodeOnigurumaLib, Registry } from "https://raw.githubusercontent.com/quackware/vscode-textmate/mod.ts";

const registry = new Registry({
  onigLib: vscodeOnigurumaLib,
  loadGrammar(scopeName: string) {
    const grandmaFile = getGrammarFileFromScopeSomehow(scopeName);
    return fetch(grandmaFile).then((res) => {
      if (res.ok) {
        return res.text().then((txt) => parseDaGrandma(txt, grammarFile));
      }
      return null;
    });
  },
});
```

## License

See [License](./LICENSE)

`vscode-textmate` is under the MIT license which can be found [here](https://github.com/microsoft/vscode-textmate/blob/main/LICENSE.md).

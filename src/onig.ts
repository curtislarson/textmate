import { default as VSCodeOniguruma } from "https://cdn.esm.sh/v68/vscode-oniguruma@1.6.2";
import { IOnigLib } from "./textmate.ts";

const wasmBin = await fetch(new URL("./deps/onig.wasm", import.meta.url));
const vscodeOnigurumaLib = VSCodeOniguruma.loadWASM(wasmBin).then(() => {
  return <IOnigLib>{
    createOnigScanner(patterns) {
      return new VSCodeOniguruma.OnigScanner(patterns);
    },
    createOnigString(s) {
      return new VSCodeOniguruma.OnigString(s);
    },
  };
});

export { wasmBin, vscodeOnigurumaLib}
import { default as VSCodeOniguruma } from "https://cdn.esm.sh/v68/vscode-oniguruma@1.6.2";
export type {
  IOnigCaptureIndex,
  OnigScanner,
  OnigString,
} from "https://cdn.esm.sh/v68/vscode-oniguruma@1.6.2";

import { IOnigLib } from "./textmate.ts";

const wasmBin = await fetch(new URL("./deps/onig.wasm", import.meta.url));
const vscodeOnigurumaLib = VSCodeOniguruma.loadWASM(wasmBin).then(() => {
  return <IOnigLib> {
    createOnigScanner(patterns) {
      return new VSCodeOniguruma.OnigScanner(patterns);
    },
    createOnigString(s) {
      return new VSCodeOniguruma.OnigString(s);
    },
  };
});

export enum FindOption {
  None = 0,
  /**
   * equivalent of ONIG_OPTION_NOT_BEGIN_STRING: (str) isn't considered as begin of string (* fail \A)
   */
  NotBeginString = 1,
  /**
   * equivalent of ONIG_OPTION_NOT_END_STRING: (end) isn't considered as end of string (* fail \z, \Z)
   */
  NotEndString = 2,
  /**
   * equivalent of ONIG_OPTION_NOT_BEGIN_POSITION: (start) isn't considered as start position of search (* fail \G)
   */
  NotBeginPosition = 4,
  /**
   * used for debugging purposes.
   */
  DebugCall = 8,
}

export { vscodeOnigurumaLib, wasmBin };

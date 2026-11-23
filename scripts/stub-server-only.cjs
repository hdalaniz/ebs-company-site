/**
 * Next.js uses `server-only` to fail client bundles. In Node unit tests the
 * package throws on import, so stub it as a no-op for the test runner only.
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const Module = require("node:module");

const originalLoad = Module._load;
Module._load = function stubServerOnly(request, parent, isMain) {
  if (request === "server-only") {
    return {};
  }
  return originalLoad(request, parent, isMain);
};
/* eslint-enable @typescript-eslint/no-require-imports */

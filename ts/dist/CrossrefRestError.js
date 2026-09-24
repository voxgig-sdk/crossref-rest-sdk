"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossrefRestError = void 0;
class CrossrefRestError extends Error {
    isCrossrefRestError = true;
    sdk = 'CrossrefRest';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CrossrefRestError = CrossrefRestError;
//# sourceMappingURL=CrossrefRestError.js.map
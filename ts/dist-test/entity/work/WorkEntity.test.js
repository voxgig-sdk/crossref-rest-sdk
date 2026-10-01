"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WorkEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CROSSREF_REST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CROSSREF_REST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrossrefRestSDK.test();
        const ent = testsdk.Work();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CROSSREF_REST_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'work.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$OBJECT`", "key$": "message", "index$": 1 }, "messagetype": { "a": true, "h": "Messagetype", "n": "messagetype", "r": false, "t": "`$STRING`", "key$": "messagetype", "index$": 2 }, "messageversion": { "a": true, "h": "Messageversion", "n": "messageversion", "r": false, "t": "`$STRING`", "key$": "messageversion", "index$": 3 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "work", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /works", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "mailto", "or": "mailto", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "desc", "k": "query", "n": "order", "or": "order", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 20, "k": "query", "n": "row", "or": "rows", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/works", "q": { "exist": ["filter", "mailto", "offset", "order", "query", "row", "sort"] }, "r": {}, "s": [{ "lit": "works" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /funders/{id}/works", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "funder_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "row", "or": "rows", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/funders/{id}/works", "q": { "exist": ["funder_id", "offset", "row"] }, "r": { "param": { "id": "funder_id" } }, "s": [{ "lit": "funders" }, { "var": "funder_id" }, { "lit": "works" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /journals/{issn}/works", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "issn", "or": "issn", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "row", "or": "rows", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/journals/{issn}/works", "q": { "exist": ["issn", "offset", "row"] }, "r": {}, "s": [{ "lit": "journals" }, { "var": "issn" }, { "lit": "works" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /members/{id}/works", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "row", "or": "rows", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/members/{id}/works", "q": { "exist": ["member_id", "offset", "row"] }, "r": { "param": { "id": "member_id" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "works" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /types/{id}/works", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "type_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "row", "or": "rows", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/types/{id}/works", "q": { "exist": ["offset", "row", "type_id"] }, "r": { "param": { "id": "type_id" } }, "s": [{ "lit": "types" }, { "var": "type_id" }, { "lit": "works" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "co": { "id": "GET /works/{doi}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "10.1037/0003-066X.59.1.29", "k": "param", "n": "id", "or": "doi", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "mailto", "or": "mailto", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/works/{doi}", "q": { "exist": ["id", "mailto"] }, "r": { "param": { "doi": "id" } }, "s": [{ "lit": "works" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.funder"], ["$.main.kit.entity.journal"], ["$.main.kit.entity.member"], ["$.main.kit.entity.type"]] }, "key$": "work", "name__orig": "work", "Name": "Work", "name_": "work", "name-": "work", "NAME": "WORK", "index$": 4 }, { "active": true, "entity": "work", "key$": "BasicWorkFlow", "kind": "basic", "name": "BasicWorkFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "work_ref01", "srcdatavar": "work_ref01_data", "suffix": "_dt0" }, "m": { "id": "work01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-work_ref01" } }], "index$": 0 }] }, 'Work', { "GET /works": { "protocol": "http", "parameters": [{ "name": "query", "in": "query", "description": "Search query string", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "rows", "in": "query", "description": "Number of results to return per page (max 1000)", "required": false, "schema": { "type": "integer", "default": 20, "maximum": 1000 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Offset for pagination", "required": false, "schema": { "type": "integer", "default": 0 }, "index$": 2 }, { "name": "filter", "in": "query", "description": "Filter results by specific criteria (e.g., from-pub-date:2020, type:journal-article)", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "sort", "in": "query", "description": "Sort results by field (e.g., published, relevance, score)", "required": false, "schema": { "type": "string", "enum": ["relevance", "score", "published", "deposited", "indexed", "updated"] }, "index$": 4 }, { "name": "order", "in": "query", "description": "Sort order", "required": false, "schema": { "type": "string", "enum": ["asc", "desc"], "default": "desc" }, "index$": 5 }, { "name": "mailto", "in": "query", "description": "Email address for polite pool access (recommended for better performance)", "required": false, "schema": { "type": "string", "format": "email" }, "index$": 6 }] }, "GET /funders/{id}/works": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "Funder identifier", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "rows", "in": "query", "description": "Number of results to return per page", "required": false, "schema": { "type": "integer", "default": 20 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Offset for pagination", "required": false, "schema": { "type": "integer", "default": 0 }, "index$": 2 }] }, "GET /journals/{issn}/works": { "protocol": "http", "parameters": [{ "name": "issn", "in": "path", "description": "ISSN of the journal", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "rows", "in": "query", "description": "Number of results to return per page", "required": false, "schema": { "type": "integer", "default": 20 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Offset for pagination", "required": false, "schema": { "type": "integer", "default": 0 }, "index$": 2 }] }, "GET /members/{id}/works": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "Member identifier", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "rows", "in": "query", "description": "Number of results to return per page", "required": false, "schema": { "type": "integer", "default": 20 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Offset for pagination", "required": false, "schema": { "type": "integer", "default": 0 }, "index$": 2 }] }, "GET /types/{id}/works": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "Type identifier", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "rows", "in": "query", "description": "Number of results to return per page", "required": false, "schema": { "type": "integer", "default": 20 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Offset for pagination", "required": false, "schema": { "type": "integer", "default": 0 }, "index$": 2 }] }, "GET /works/{doi}": { "protocol": "http", "parameters": [{ "name": "doi", "in": "path", "description": "Digital Object Identifier (DOI) of the work", "required": true, "schema": { "type": "string" }, "example": "10.1037/0003-066X.59.1.29", "index$": 0 }, { "name": "mailto", "in": "query", "description": "Email address for polite pool access", "required": false, "schema": { "type": "string", "format": "email" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let work_ref01_data = Object.values(setup.data.existing.work)[0];
        // LOAD
        const work_ref01_ent = client.Work();
        const work_ref01_match_dt0 = {};
        work_ref01_match_dt0.id = work_ref01_data.id;
        const work_ref01_data_dt0 = (await work_ref01_ent.load(work_ref01_match_dt0)).data();
        (0, node_assert_1.default)(work_ref01_data_dt0.id === work_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/work/WorkTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrossrefRestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['work01', 'work02', 'work03', 'funder01', 'funder02', 'funder03', 'journal01', 'journal02', 'journal03', 'member01', 'member02', 'member03', 'type01', 'type02', 'type03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CROSSREF_REST_TEST_WORK_ENTID': idmap,
        'CROSSREF_REST_TEST_LIVE': 'FALSE',
        'CROSSREF_REST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CROSSREF_REST_TEST_WORK_ENTID'];
    const live = 'TRUE' === env.CROSSREF_REST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CROSSREF_REST_TEST_WORK_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CrossrefRestSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CROSSREF_REST_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WorkEntity.test.js.map
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
(0, node_test_1.describe)('MemberEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CROSSREF_REST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CROSSREF_REST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CrossrefRestSDK.test();
        const ent = testsdk.Member();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CROSSREF_REST_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'member.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "counts": { "a": true, "h": "Counts", "n": "counts", "r": false, "t": "`$OBJECT`", "key$": "counts", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "items": { "a": true, "h": "Items", "n": "items", "r": false, "t": "`$ARRAY`", "key$": "items", "index$": 2 }, "itemsperpage": { "a": true, "h": "Itemsperpage", "n": "itemsperpage", "r": false, "t": "`$INTEGER`", "key$": "itemsperpage", "index$": 3 }, "laststatuschecktime": { "a": true, "h": "Laststatuschecktime", "n": "laststatuschecktime", "r": false, "t": "`$INTEGER`", "key$": "laststatuschecktime", "index$": 4 }, "location": { "a": true, "h": "Location", "n": "location", "r": false, "t": "`$STRING`", "key$": "location", "index$": 5 }, "primaryname": { "a": true, "h": "Primaryname", "n": "primaryname", "r": false, "t": "`$STRING`", "key$": "primaryname", "index$": 6 }, "totalresults": { "a": true, "h": "Totalresults", "n": "totalresults", "r": false, "t": "`$INTEGER`", "key$": "totalresults", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "member", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /members", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "row", "or": "row", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/members", "q": { "exist": ["offset", "query", "row"] }, "r": {}, "s": [{ "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body.message`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /members/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "311", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/members/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "members" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.message`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "member", "name__orig": "member", "Name": "Member", "name_": "member", "name-": "member", "NAME": "MEMBER", "index$": 2 }, { "active": true, "entity": "member", "key$": "BasicMemberFlow", "kind": "basic", "name": "BasicMemberFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "member_ref01", "srcdatavar": "member_ref01_data", "suffix": "_dt0" }, "m": { "id": "member01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-member_ref01" } }], "index$": 0 }] }, 'Member', { "GET /members": { "protocol": "http", "operationId": "getMembers", "responses": { "200": { "description": "Successful response with member metadata", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "example": "ok", "key$": "status", "type": "string" }, "message-type": { "example": "member-list", "key$": "message-type", "type": "string" }, "message": { "key$": "message", "properties": { "items": { "items": { "properties": { "counts": { "type": "object" }, "id": { "type": "integer" }, "last-status-check-time": { "type": "integer" }, "location": { "type": "string" }, "primary-name": { "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Member" }, "type": "array", "key$": "items" }, "items-per-page": { "type": "integer", "key$": "items-per-page" }, "total-results": { "type": "integer", "key$": "total-results" } }, "type": "object", "index$": 0 } }, "x-ref": "#/components/schemas/MembersResponse" } } } }, "400": { "description": "Bad request" } }, "parameters": [{ "name": "query", "in": "query", "description": "Search query string", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "rows", "in": "query", "description": "Number of results to return per page", "required": false, "schema": { "type": "integer", "default": 20 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Offset for pagination", "required": false, "schema": { "type": "integer", "default": 0 }, "index$": 2 }], "securitySource": "unspecified" }, "GET /members/{id}": { "protocol": "http", "operationId": "getMemberById", "responses": { "200": { "description": "Successful response with member metadata", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "type": "string", "example": "ok" }, "message-type": { "type": "string", "example": "member" }, "message": { "type": "object", "properties": { "id": { "type": "integer", "key$": "id" }, "primary-name": { "type": "string", "key$": "primary-name" }, "location": { "type": "string", "key$": "location" }, "last-status-check-time": { "type": "integer", "key$": "last-status-check-time" }, "counts": { "type": "object", "key$": "counts" } }, "x-ref": "#/components/schemas/Member", "index$": 0 } }, "x-ref": "#/components/schemas/MemberResponse" } } } }, "404": { "description": "Member not found" } }, "parameters": [{ "name": "id", "in": "path", "description": "Member identifier", "required": true, "schema": { "type": "string" }, "example": "311", "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let member_ref01_data = Object.values(setup.data.existing.member)[0];
        // LOAD
        const member_ref01_ent = client.Member();
        const member_ref01_match_dt0 = {};
        member_ref01_match_dt0.id = member_ref01_data.id;
        const member_ref01_data_dt0 = (await member_ref01_ent.load(member_ref01_match_dt0)).data();
        (0, node_assert_1.default)(member_ref01_data_dt0.id === member_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/member/MemberTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CrossrefRestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['member01', 'member02', 'member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CROSSREF_REST_TEST_MEMBER_ENTID': idmap,
        'CROSSREF_REST_TEST_LIVE': 'FALSE',
        'CROSSREF_REST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CROSSREF_REST_TEST_MEMBER_ENTID'];
    const live = 'TRUE' === env.CROSSREF_REST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CROSSREF_REST_TEST_MEMBER_ENTID'];
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
//# sourceMappingURL=MemberEntity.test.js.map
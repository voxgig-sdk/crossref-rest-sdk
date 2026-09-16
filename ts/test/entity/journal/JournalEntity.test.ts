

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CrossrefRestSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('JournalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CROSSREF_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CROSSREF_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrossrefRestSDK.test()
    const ent = testsdk.Journal()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CROSSREF_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'journal.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ISSN","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"coverage","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"items","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"itemsperpage","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"publisher","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"totalresults","req":false,"type":"`$INTEGER`","index$":7}],"id":{"field":"id","name":"id"},"name":"journal","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":20,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /journals","json":"{\"operationId\":\"getJournals\",\"parameters\":[{\"description\":\"Search query string\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":20,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"coverage\":{\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"items-per-page\":{\"type\":\"integer\"},\"total-results\":{\"type\":\"integer\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"journal-list\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with journal metadata\"},\"400\":{\"description\":\"Bad request\"},\"404\":{\"description\":\"No results found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/journals","segments":[{"lit":"journals"}],"select":{"exist":["offset","query","row"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"1476-4687","kind":"param","name":"id","orig":"issn","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /journals/{issn}","json":"{\"operationId\":\"getJournalByIssn\",\"parameters\":[{\"description\":\"International Standard Serial Number (ISSN) of the journal\",\"example\":\"1476-4687\",\"in\":\"path\",\"name\":\"issn\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"coverage\":{\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"journal\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with journal metadata\"},\"404\":{\"description\":\"ISSN not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/journals/{issn}","rename":{"param":{"issn":"id"}},"segments":[{"lit":"journals"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"journal","name__orig":"journal","Name":"Journal","name_":"journal","name-":"journal","NAME":"JOURNAL","index$":1}, {"active":true,"entity":"journal","key$":"BasicJournalFlow","kind":"basic","name":"BasicJournalFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"journal_ref01","srcdatavar":"journal_ref01_data","suffix":"_dt0"},"match":{"id":"journal01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-journal_ref01"}}],"index$":0}]}, 'Journal')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let journal_ref01_data = Object.values(setup.data.existing.journal)[0] as any

    // LOAD
    const journal_ref01_ent = client.Journal()
    const journal_ref01_match_dt0: any = {}
    journal_ref01_match_dt0.id = journal_ref01_data.id
    const journal_ref01_data_dt0 = (await journal_ref01_ent.load(journal_ref01_match_dt0)).data()
    assert(journal_ref01_data_dt0.id === journal_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/journal/JournalTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CrossrefRestSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['journal01','journal02','journal03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CROSSREF_REST_TEST_JOURNAL_ENTID': idmap,
    'CROSSREF_REST_TEST_LIVE': 'FALSE',
    'CROSSREF_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CROSSREF_REST_TEST_JOURNAL_ENTID']

  const live = 'TRUE' === env.CROSSREF_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CROSSREF_REST_TEST_JOURNAL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CrossrefRestSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  

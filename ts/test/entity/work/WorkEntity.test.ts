

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


describe('WorkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CROSSREF_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CROSSREF_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrossrefRestSDK.test()
    const ent = testsdk.Work()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CROSSREF_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'work.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"DOI","req":false,"short":"Digital Object Identifier","type":"`$STRING`","index$":0},{"active":true,"name":"ISSN","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"URL","req":false,"short":"URL to the work","type":"`$STRING`","index$":2},{"active":true,"name":"abstract","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"author","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"containertitle","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"isreferencedbycount","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"items","req":false,"type":"`$ARRAY`","index$":8},{"active":true,"name":"itemsperpage","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"name":"published","req":false,"type":"`$OBJECT`","index$":10},{"active":true,"name":"publisher","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"query","req":false,"type":"`$OBJECT`","index$":12},{"active":true,"name":"referencecount","req":false,"type":"`$INTEGER`","index$":13},{"active":true,"name":"title","req":false,"type":"`$ARRAY`","index$":14},{"active":true,"name":"totalresults","req":false,"type":"`$INTEGER`","index$":15},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":16}],"id":{"field":"id","name":"id"},"name":"work","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"mailto","orig":"mailto","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"desc","kind":"query","name":"order","orig":"order","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":20,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":6}]},"contract":{"id":"GET /works","json":"{\"operationId\":\"getWorks\",\"parameters\":[{\"description\":\"Search query string\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return per page (max 1000)\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":1000,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Filter results by specific criteria (e.g., from-pub-date:2020, type:journal-article)\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sort results by field (e.g., published, relevance, score)\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"enum\":[\"relevance\",\"score\",\"published\",\"deposited\",\"indexed\",\"updated\"],\"type\":\"string\"}},{\"description\":\"Sort order\",\"in\":\"query\",\"name\":\"order\",\"required\":false,\"schema\":{\"default\":\"desc\",\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}},{\"description\":\"Email address for polite pool access (recommended for better performance)\",\"in\":\"query\",\"name\":\"mailto\",\"required\":false,\"schema\":{\"format\":\"email\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"DOI\":{\"description\":\"Digital Object Identifier\",\"type\":\"string\"},\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"URL\":{\"description\":\"URL to the work\",\"type\":\"string\"},\"abstract\":{\"type\":\"string\"},\"author\":{\"items\":{\"properties\":{\"ORCID\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"given\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"container-title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"is-referenced-by-count\":{\"type\":\"integer\"},\"published\":{\"properties\":{\"date-parts\":{\"items\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"type\":\"array\"}},\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"reference-count\":{\"type\":\"integer\"},\"title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"items-per-page\":{\"type\":\"integer\"},\"query\":{\"type\":\"object\"},\"total-results\":{\"type\":\"integer\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"work-list\",\"type\":\"string\"},\"message-version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with works metadata\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"404\":{\"description\":\"No results found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/works","segments":[{"lit":"works"}],"select":{"exist":["filter","mailto","offset","order","query","row","sort"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"funder_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /funders/{id}/works","json":"{\"operationId\":\"getFunderWorks\",\"parameters\":[{\"description\":\"Funder identifier\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":20,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"DOI\":{\"description\":\"Digital Object Identifier\",\"type\":\"string\"},\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"URL\":{\"description\":\"URL to the work\",\"type\":\"string\"},\"abstract\":{\"type\":\"string\"},\"author\":{\"items\":{\"properties\":{\"ORCID\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"given\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"container-title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"is-referenced-by-count\":{\"type\":\"integer\"},\"published\":{\"properties\":{\"date-parts\":{\"items\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"type\":\"array\"}},\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"reference-count\":{\"type\":\"integer\"},\"title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"items-per-page\":{\"type\":\"integer\"},\"query\":{\"type\":\"object\"},\"total-results\":{\"type\":\"integer\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"work-list\",\"type\":\"string\"},\"message-version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with works metadata\"},\"404\":{\"description\":\"Funder not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/funders/{id}/works","rename":{"param":{"id":"funder_id"}},"segments":[{"lit":"funders"},{"var":"funder_id"},{"lit":"works"}],"select":{"exist":["funder_id","offset","row"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issn","orig":"issn","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /journals/{issn}/works","json":"{\"operationId\":\"getJournalWorks\",\"parameters\":[{\"description\":\"ISSN of the journal\",\"in\":\"path\",\"name\":\"issn\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":20,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"DOI\":{\"description\":\"Digital Object Identifier\",\"type\":\"string\"},\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"URL\":{\"description\":\"URL to the work\",\"type\":\"string\"},\"abstract\":{\"type\":\"string\"},\"author\":{\"items\":{\"properties\":{\"ORCID\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"given\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"container-title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"is-referenced-by-count\":{\"type\":\"integer\"},\"published\":{\"properties\":{\"date-parts\":{\"items\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"type\":\"array\"}},\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"reference-count\":{\"type\":\"integer\"},\"title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"items-per-page\":{\"type\":\"integer\"},\"query\":{\"type\":\"object\"},\"total-results\":{\"type\":\"integer\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"work-list\",\"type\":\"string\"},\"message-version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with works metadata\"},\"404\":{\"description\":\"Journal not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/journals/{issn}/works","segments":[{"lit":"journals"},{"var":"issn"},{"lit":"works"}],"select":{"exist":["issn","offset","row"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /members/{id}/works","json":"{\"operationId\":\"getMemberWorks\",\"parameters\":[{\"description\":\"Member identifier\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":20,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"DOI\":{\"description\":\"Digital Object Identifier\",\"type\":\"string\"},\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"URL\":{\"description\":\"URL to the work\",\"type\":\"string\"},\"abstract\":{\"type\":\"string\"},\"author\":{\"items\":{\"properties\":{\"ORCID\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"given\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"container-title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"is-referenced-by-count\":{\"type\":\"integer\"},\"published\":{\"properties\":{\"date-parts\":{\"items\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"type\":\"array\"}},\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"reference-count\":{\"type\":\"integer\"},\"title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"items-per-page\":{\"type\":\"integer\"},\"query\":{\"type\":\"object\"},\"total-results\":{\"type\":\"integer\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"work-list\",\"type\":\"string\"},\"message-version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with works metadata\"},\"404\":{\"description\":\"Member not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/works","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"works"}],"select":{"exist":["member_id","offset","row"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":3},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"type_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /types/{id}/works","json":"{\"operationId\":\"getTypeWorks\",\"parameters\":[{\"description\":\"Type identifier\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":20,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"DOI\":{\"description\":\"Digital Object Identifier\",\"type\":\"string\"},\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"URL\":{\"description\":\"URL to the work\",\"type\":\"string\"},\"abstract\":{\"type\":\"string\"},\"author\":{\"items\":{\"properties\":{\"ORCID\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"given\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"container-title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"is-referenced-by-count\":{\"type\":\"integer\"},\"published\":{\"properties\":{\"date-parts\":{\"items\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"type\":\"array\"}},\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"reference-count\":{\"type\":\"integer\"},\"title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"items-per-page\":{\"type\":\"integer\"},\"query\":{\"type\":\"object\"},\"total-results\":{\"type\":\"integer\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"work-list\",\"type\":\"string\"},\"message-version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with works metadata\"},\"404\":{\"description\":\"Type not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/types/{id}/works","rename":{"param":{"id":"type_id"}},"segments":[{"lit":"types"},{"var":"type_id"},{"lit":"works"}],"select":{"exist":["offset","row","type_id"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":4},{"active":true,"args":{"params":[{"active":true,"example":"10.1037/0003-066X.59.1.29","kind":"param","name":"id","orig":"doi","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"mailto","orig":"mailto","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /works/{doi}","json":"{\"operationId\":\"getWorkByDoi\",\"parameters\":[{\"description\":\"Digital Object Identifier (DOI) of the work\",\"example\":\"10.1037/0003-066X.59.1.29\",\"in\":\"path\",\"name\":\"doi\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Email address for polite pool access\",\"in\":\"query\",\"name\":\"mailto\",\"required\":false,\"schema\":{\"format\":\"email\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"DOI\":{\"description\":\"Digital Object Identifier\",\"type\":\"string\"},\"ISSN\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"URL\":{\"description\":\"URL to the work\",\"type\":\"string\"},\"abstract\":{\"type\":\"string\"},\"author\":{\"items\":{\"properties\":{\"ORCID\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"given\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"container-title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"is-referenced-by-count\":{\"type\":\"integer\"},\"published\":{\"properties\":{\"date-parts\":{\"items\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"type\":\"array\"}},\"type\":\"object\"},\"publisher\":{\"type\":\"string\"},\"reference-count\":{\"type\":\"integer\"},\"title\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"work\",\"type\":\"string\"},\"message-version\":{\"example\":\"1.0.0\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with work metadata\"},\"404\":{\"description\":\"DOI not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/works/{doi}","rename":{"param":{"doi":"id"}},"segments":[{"lit":"works"},{"var":"id"}],"select":{"exist":["id","mailto"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["funder"],["journal"],["member"],["type"]]},"key$":"work","name__orig":"work","Name":"Work","name_":"work","name-":"work","NAME":"WORK","index$":4}, {"active":true,"entity":"work","key$":"BasicWorkFlow","kind":"basic","name":"BasicWorkFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"work_ref01","srcdatavar":"work_ref01_data","suffix":"_dt0"},"match":{"id":"work01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-work_ref01"}}],"index$":0}]}, 'Work')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let work_ref01_data = Object.values(setup.data.existing.work)[0] as any

    // LOAD
    const work_ref01_ent = client.Work()
    const work_ref01_match_dt0: any = {}
    work_ref01_match_dt0.id = work_ref01_data.id
    const work_ref01_data_dt0 = (await work_ref01_ent.load(work_ref01_match_dt0)).data()
    assert(work_ref01_data_dt0.id === work_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/work/WorkTestData.json')

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
    ['work01','work02','work03','funder01','funder02','funder03','journal01','journal02','journal03','member01','member02','member03','type01','type02','type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CROSSREF_REST_TEST_WORK_ENTID': idmap,
    'CROSSREF_REST_TEST_LIVE': 'FALSE',
    'CROSSREF_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CROSSREF_REST_TEST_WORK_ENTID']

  const live = 'TRUE' === env.CROSSREF_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CROSSREF_REST_TEST_WORK_ENTID']
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
  

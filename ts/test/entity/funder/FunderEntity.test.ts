

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


describe('FunderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CROSSREF_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CROSSREF_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrossrefRestSDK.test()
    const ent = testsdk.Funder()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CROSSREF_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'funder.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"altnames","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"items","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"itemsperpage","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"totalresults","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"uri","req":false,"type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"funder","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":20,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /funders","json":"{\"operationId\":\"getFunders\",\"parameters\":[{\"description\":\"Search query string\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":20,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"alt-names\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"uri\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"items-per-page\":{\"type\":\"integer\"},\"total-results\":{\"type\":\"integer\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"funder-list\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with funder metadata\"},\"400\":{\"description\":\"Bad request\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/funders","segments":[{"lit":"funders"}],"select":{"exist":["offset","query","row"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"100000001","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /funders/{id}","json":"{\"operationId\":\"getFunderById\",\"parameters\":[{\"description\":\"Funder identifier\",\"example\":\"100000001\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"alt-names\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"uri\":{\"type\":\"string\"}},\"type\":\"object\"},\"message-type\":{\"example\":\"funder\",\"type\":\"string\"},\"status\":{\"example\":\"ok\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with funder metadata\"},\"404\":{\"description\":\"Funder not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/funders/{id}","segments":[{"lit":"funders"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.message`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"funder","name__orig":"funder","Name":"Funder","name_":"funder","name-":"funder","NAME":"FUNDER","index$":0}, {"active":true,"entity":"funder","key$":"BasicFunderFlow","kind":"basic","name":"BasicFunderFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"funder_ref01","srcdatavar":"funder_ref01_data","suffix":"_dt0"},"match":{"id":"funder01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-funder_ref01"}}],"index$":0}]}, 'Funder')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let funder_ref01_data = Object.values(setup.data.existing.funder)[0] as any

    // LOAD
    const funder_ref01_ent = client.Funder()
    const funder_ref01_match_dt0: any = {}
    funder_ref01_match_dt0.id = funder_ref01_data.id
    const funder_ref01_data_dt0 = (await funder_ref01_ent.load(funder_ref01_match_dt0)).data()
    assert(funder_ref01_data_dt0.id === funder_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/funder/FunderTestData.json')

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
    ['funder01','funder02','funder03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CROSSREF_REST_TEST_FUNDER_ENTID': idmap,
    'CROSSREF_REST_TEST_LIVE': 'FALSE',
    'CROSSREF_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CROSSREF_REST_TEST_FUNDER_ENTID']

  const live = 'TRUE' === env.CROSSREF_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CROSSREF_REST_TEST_FUNDER_ENTID']
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
  

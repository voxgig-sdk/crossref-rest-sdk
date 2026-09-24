

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"altnames":{"a":true,"h":"Altnames","n":"altnames","r":false,"t":"`$ARRAY`","key$":"altnames","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":2},"itemsperpage":{"a":true,"h":"Itemsperpage","n":"itemsperpage","r":false,"t":"`$INTEGER`","key$":"itemsperpage","index$":3},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$STRING`","key$":"location","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"totalresults":{"a":true,"h":"Totalresults","n":"totalresults","r":false,"t":"`$INTEGER`","key$":"totalresults","index$":6},"uri":{"a":true,"h":"Uri","n":"uri","r":false,"t":"`$STRING`","key$":"uri","index$":7}},"id":{"field":"id","name":"id"},"name":"funder","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /funders","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":20,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/funders","q":{"exist":["offset","query","row"]},"r":{},"s":[{"lit":"funders"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":0},{"a":true,"co":{"id":"GET /funders/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"100000001","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/funders/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"funders"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"funder","name__orig":"funder","Name":"Funder","name_":"funder","name-":"funder","NAME":"FUNDER","index$":0}, {"active":true,"entity":"funder","key$":"BasicFunderFlow","kind":"basic","name":"BasicFunderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"funder_ref01","srcdatavar":"funder_ref01_data","suffix":"_dt0"},"m":{"id":"funder01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-funder_ref01"}}],"index$":0}]}, 'Funder', {"GET /funders":{"protocol":"http","operationId":"getFunders","responses":{"200":{"description":"Successful response with funder metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":"ok","key$":"status","type":"string"},"message-type":{"example":"funder-list","key$":"message-type","type":"string"},"message":{"key$":"message","properties":{"items":{"items":{"properties":{"alt-names":{"items":{"type":"string"},"type":"array"},"id":{"type":"string"},"location":{"type":"string"},"name":{"type":"string"},"uri":{"type":"string"}},"type":"object","x-ref":"#/components/schemas/Funder"},"type":"array","key$":"items"},"items-per-page":{"type":"integer","key$":"items-per-page"},"total-results":{"type":"integer","key$":"total-results"}},"type":"object","index$":0}},"x-ref":"#/components/schemas/FundersResponse"}}}},"400":{"description":"Bad request"}},"parameters":[{"name":"query","in":"query","description":"Search query string","required":false,"schema":{"type":"string"},"index$":0},{"name":"rows","in":"query","description":"Number of results to return per page","required":false,"schema":{"type":"integer","default":20},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0},"index$":2}],"securitySource":"unspecified"},"GET /funders/{id}":{"protocol":"http","operationId":"getFunderById","responses":{"200":{"description":"Successful response with funder metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","example":"ok"},"message-type":{"type":"string","example":"funder"},"message":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"name":{"type":"string","key$":"name"},"location":{"type":"string","key$":"location"},"alt-names":{"items":{"type":"string"},"type":"array","key$":"alt-names"},"uri":{"type":"string","key$":"uri"}},"x-ref":"#/components/schemas/Funder","index$":0}},"x-ref":"#/components/schemas/FunderResponse"}}}},"404":{"description":"Funder not found"}},"parameters":[{"name":"id","in":"path","description":"Funder identifier","required":true,"schema":{"type":"string"},"example":"100000001","index$":0}],"securitySource":"unspecified"}})
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
  

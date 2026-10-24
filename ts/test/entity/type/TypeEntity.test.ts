

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CrossrefRestSDK, BaseFeature, config, stdutil } from '../../..'

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


describe('TypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CROSSREF_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('CROSSREF_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CrossrefRestSDK.test()
    const ent = testsdk.Type()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = CrossrefRestSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Type().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CROSSREF_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$OBJECT`","key$":"message","index$":1},"messagetype":{"a":true,"h":"Messagetype","n":"messagetype","r":false,"t":"`$STRING`","key$":"messagetype","index$":2},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":3}},"id":{"field":"id","name":"id"},"name":"type","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /types/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"journal-article","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/types/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /types","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/types","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"types"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"type","name__orig":"type","Name":"Type","name_":"type","name-":"type","NAME":"TYPE","index$":3}, {"active":true,"entity":"type","key$":"BasicTypeFlow","kind":"basic","name":"BasicTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"type_ref01","srcdatavar":"type_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-type_ref01"}}],"index$":0}]}, 'Type', {"GET /types/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"Type identifier","required":true,"schema":{"type":"string"},"example":"journal-article","index$":0}]},"GET /types":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let type_ref01_data = Object.values(setup.data.existing.type)[0] as any

    // LOAD
    const type_ref01_ent = client.Type()
    const type_ref01_match_dt0: any = {}
    type_ref01_match_dt0.id = type_ref01_data.id
    const type_ref01_data_dt0 = (await type_ref01_ent.load(type_ref01_match_dt0)).data()
    assert(type_ref01_data_dt0.id === type_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/type/TypeTestData.json')

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
    ['type01','type02','type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CROSSREF_REST_TEST_TYPE_ENTID': idmap,
    'CROSSREF_REST_TEST_LIVE': 'FALSE',
    'CROSSREF_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CROSSREF_REST_TEST_TYPE_ENTID']

  const live = 'TRUE' === env.CROSSREF_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CROSSREF_REST_TEST_TYPE_ENTID']
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
  

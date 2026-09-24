

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ISSN":{"a":true,"h":"Issn","n":"ISSN","r":false,"t":"`$ARRAY`","key$":"ISSN","index$":0},"coverage":{"a":true,"h":"Coverage","n":"coverage","r":false,"t":"`$OBJECT`","key$":"coverage","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":3},"itemsperpage":{"a":true,"h":"Itemsperpage","n":"itemsperpage","r":false,"t":"`$INTEGER`","key$":"itemsperpage","index$":4},"publisher":{"a":true,"h":"Publisher","n":"publisher","r":false,"t":"`$STRING`","key$":"publisher","index$":5},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":6},"totalresults":{"a":true,"h":"Totalresults","n":"totalresults","r":false,"t":"`$INTEGER`","key$":"totalresults","index$":7}},"id":{"field":"id","name":"id"},"name":"journal","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /journals","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":20,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/journals","q":{"exist":["offset","query","row"]},"r":{},"s":[{"lit":"journals"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":0},{"a":true,"co":{"id":"GET /journals/{issn}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"1476-4687","k":"param","n":"id","or":"issn","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/journals/{issn}","q":{"exist":["id"]},"r":{"param":{"issn":"id"}},"s":[{"lit":"journals"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"journal","name__orig":"journal","Name":"Journal","name_":"journal","name-":"journal","NAME":"JOURNAL","index$":1}, {"active":true,"entity":"journal","key$":"BasicJournalFlow","kind":"basic","name":"BasicJournalFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"journal_ref01","srcdatavar":"journal_ref01_data","suffix":"_dt0"},"m":{"id":"journal01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-journal_ref01"}}],"index$":0}]}, 'Journal', {"GET /journals":{"protocol":"http","operationId":"getJournals","responses":{"200":{"description":"Successful response with journal metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":"ok","key$":"status","type":"string"},"message-type":{"example":"journal-list","key$":"message-type","type":"string"},"message":{"key$":"message","properties":{"items":{"items":{"properties":{"ISSN":{"items":{"type":"string"},"type":"array"},"coverage":{"type":"object"},"publisher":{"type":"string"},"title":{"type":"string"}},"type":"object","x-ref":"#/components/schemas/Journal"},"type":"array","key$":"items"},"items-per-page":{"type":"integer","key$":"items-per-page"},"total-results":{"type":"integer","key$":"total-results"}},"type":"object","index$":0}},"x-ref":"#/components/schemas/JournalsResponse"}}}},"400":{"description":"Bad request"},"404":{"description":"No results found"}},"parameters":[{"name":"query","in":"query","description":"Search query string","required":false,"schema":{"type":"string"},"index$":0},{"name":"rows","in":"query","description":"Number of results to return per page","required":false,"schema":{"type":"integer","default":20},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0},"index$":2}],"securitySource":"unspecified"},"GET /journals/{issn}":{"protocol":"http","operationId":"getJournalByIssn","responses":{"200":{"description":"Successful response with journal metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","example":"ok"},"message-type":{"type":"string","example":"journal"},"message":{"type":"object","properties":{"title":{"type":"string","key$":"title"},"ISSN":{"items":{"type":"string"},"type":"array","key$":"ISSN"},"publisher":{"type":"string","key$":"publisher"},"coverage":{"type":"object","key$":"coverage"}},"x-ref":"#/components/schemas/Journal","index$":0}},"x-ref":"#/components/schemas/JournalResponse"}}}},"404":{"description":"ISSN not found"}},"parameters":[{"name":"issn","in":"path","description":"International Standard Serial Number (ISSN) of the journal","required":true,"schema":{"type":"string"},"example":"1476-4687","index$":0}],"securitySource":"unspecified"}})
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
  

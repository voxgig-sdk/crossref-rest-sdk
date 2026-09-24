

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"DOI":{"a":true,"h":"Doi","n":"DOI","r":false,"sh":"Digital Object Identifier","t":"`$STRING`","key$":"DOI","index$":0},"ISSN":{"a":true,"h":"Issn","n":"ISSN","r":false,"t":"`$ARRAY`","key$":"ISSN","index$":1},"URL":{"a":true,"h":"Url","n":"URL","r":false,"sh":"URL to the work","t":"`$STRING`","key$":"URL","index$":2},"abstract":{"a":true,"h":"Abstract","n":"abstract","r":false,"t":"`$STRING`","key$":"abstract","index$":3},"author":{"a":true,"h":"Author","n":"author","r":false,"t":"`$ARRAY`","key$":"author","index$":4},"containertitle":{"a":true,"h":"Containertitle","n":"containertitle","r":false,"t":"`$ARRAY`","key$":"containertitle","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"isreferencedbycount":{"a":true,"h":"Isreferencedbycount","n":"isreferencedbycount","r":false,"t":"`$INTEGER`","key$":"isreferencedbycount","index$":7},"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":8},"itemsperpage":{"a":true,"h":"Itemsperpage","n":"itemsperpage","r":false,"t":"`$INTEGER`","key$":"itemsperpage","index$":9},"published":{"a":true,"h":"Published","n":"published","r":false,"t":"`$OBJECT`","key$":"published","index$":10},"publisher":{"a":true,"h":"Publisher","n":"publisher","r":false,"t":"`$STRING`","key$":"publisher","index$":11},"query":{"a":true,"h":"Query","n":"query","r":false,"t":"`$OBJECT`","key$":"query","index$":12},"referencecount":{"a":true,"h":"Referencecount","n":"referencecount","r":false,"t":"`$INTEGER`","key$":"referencecount","index$":13},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$ARRAY`","key$":"title","index$":14},"totalresults":{"a":true,"h":"Totalresults","n":"totalresults","r":false,"t":"`$INTEGER`","key$":"totalresults","index$":15},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":16}},"id":{"field":"id","name":"id"},"name":"work","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /works","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"mailto","or":"mailto","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"desc","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":20,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/works","q":{"exist":["filter","mailto","offset","order","query","row","sort"]},"r":{},"s":[{"lit":"works"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":0},{"a":true,"co":{"id":"GET /funders/{id}/works","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"funder_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/funders/{id}/works","q":{"exist":["funder_id","offset","row"]},"r":{"param":{"id":"funder_id"}},"s":[{"lit":"funders"},{"var":"funder_id"},{"lit":"works"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":1},{"a":true,"co":{"id":"GET /journals/{issn}/works","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"issn","or":"issn","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/journals/{issn}/works","q":{"exist":["issn","offset","row"]},"r":{},"s":[{"lit":"journals"},{"var":"issn"},{"lit":"works"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":2},{"a":true,"co":{"id":"GET /members/{id}/works","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/members/{id}/works","q":{"exist":["member_id","offset","row"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"works"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":3},{"a":true,"co":{"id":"GET /types/{id}/works","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"type_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/types/{id}/works","q":{"exist":["offset","row","type_id"]},"r":{"param":{"id":"type_id"}},"s":[{"lit":"types"},{"var":"type_id"},{"lit":"works"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":4},{"a":true,"co":{"id":"GET /works/{doi}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"10.1037/0003-066X.59.1.29","k":"param","n":"id","or":"doi","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"mailto","or":"mailto","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/works/{doi}","q":{"exist":["id","mailto"]},"r":{"param":{"doi":"id"}},"s":[{"lit":"works"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.message`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.funder"],["$.main.kit.entity.journal"],["$.main.kit.entity.member"],["$.main.kit.entity.type"]]},"key$":"work","name__orig":"work","Name":"Work","name_":"work","name-":"work","NAME":"WORK","index$":4}, {"active":true,"entity":"work","key$":"BasicWorkFlow","kind":"basic","name":"BasicWorkFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"work_ref01","srcdatavar":"work_ref01_data","suffix":"_dt0"},"m":{"id":"work01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-work_ref01"}}],"index$":0}]}, 'Work', {"GET /works":{"protocol":"http","operationId":"getWorks","responses":{"200":{"description":"Successful response with works metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":"ok","key$":"status","type":"string"},"message-type":{"example":"work-list","key$":"message-type","type":"string"},"message-version":{"example":"1.0.0","key$":"message-version","type":"string"},"message":{"key$":"message","properties":{"items":{"items":{"properties":{"DOI":{"description":"Digital Object Identifier","type":"string"},"ISSN":{"items":{"type":"string"},"type":"array"},"URL":{"description":"URL to the work","type":"string"},"abstract":{"type":"string"},"author":{"items":{"properties":{"ORCID":{"type":"string"},"family":{"type":"string"},"given":{"type":"string"}},"type":"object"},"type":"array"},"container-title":{"items":{"type":"string"},"type":"array"},"is-referenced-by-count":{"type":"integer"},"published":{"properties":{"date-parts":{"items":{"items":{"type":"integer"},"type":"array"},"type":"array"}},"type":"object"},"publisher":{"type":"string"},"reference-count":{"type":"integer"},"title":{"items":{"type":"string"},"type":"array"},"type":{"type":"string"}},"type":"object","x-ref":"#/components/schemas/Work"},"type":"array","key$":"items"},"items-per-page":{"type":"integer","key$":"items-per-page"},"query":{"type":"object","key$":"query"},"total-results":{"type":"integer","key$":"total-results"}},"type":"object","index$":0}},"x-ref":"#/components/schemas/WorksResponse"}}}},"400":{"description":"Bad request - invalid parameters"},"404":{"description":"No results found"},"503":{"description":"Service unavailable"}},"parameters":[{"name":"query","in":"query","description":"Search query string","required":false,"schema":{"type":"string"},"index$":0},{"name":"rows","in":"query","description":"Number of results to return per page (max 1000)","required":false,"schema":{"type":"integer","default":20,"maximum":1000},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0},"index$":2},{"name":"filter","in":"query","description":"Filter results by specific criteria (e.g., from-pub-date:2020, type:journal-article)","required":false,"schema":{"type":"string"},"index$":3},{"name":"sort","in":"query","description":"Sort results by field (e.g., published, relevance, score)","required":false,"schema":{"type":"string","enum":["relevance","score","published","deposited","indexed","updated"]},"index$":4},{"name":"order","in":"query","description":"Sort order","required":false,"schema":{"type":"string","enum":["asc","desc"],"default":"desc"},"index$":5},{"name":"mailto","in":"query","description":"Email address for polite pool access (recommended for better performance)","required":false,"schema":{"type":"string","format":"email"},"index$":6}],"securitySource":"unspecified"},"GET /funders/{id}/works":{"protocol":"http","operationId":"getFunderWorks","responses":{"200":{"description":"Successful response with works metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":"ok","key$":"status","type":"string"},"message-type":{"example":"work-list","key$":"message-type","type":"string"},"message-version":{"example":"1.0.0","key$":"message-version","type":"string"},"message":{"key$":"message","properties":{"items":{"items":{"properties":{"DOI":{"description":"Digital Object Identifier","type":"string"},"ISSN":{"items":{"type":"string"},"type":"array"},"URL":{"description":"URL to the work","type":"string"},"abstract":{"type":"string"},"author":{"items":{"properties":{"ORCID":{"type":"string"},"family":{"type":"string"},"given":{"type":"string"}},"type":"object"},"type":"array"},"container-title":{"items":{"type":"string"},"type":"array"},"is-referenced-by-count":{"type":"integer"},"published":{"properties":{"date-parts":{"items":{"items":{"type":"integer"},"type":"array"},"type":"array"}},"type":"object"},"publisher":{"type":"string"},"reference-count":{"type":"integer"},"title":{"items":{"type":"string"},"type":"array"},"type":{"type":"string"}},"type":"object","x-ref":"#/components/schemas/Work"},"type":"array","key$":"items"},"items-per-page":{"type":"integer","key$":"items-per-page"},"query":{"type":"object","key$":"query"},"total-results":{"type":"integer","key$":"total-results"}},"type":"object","index$":0}},"x-ref":"#/components/schemas/WorksResponse"}}}},"404":{"description":"Funder not found"}},"parameters":[{"name":"id","in":"path","description":"Funder identifier","required":true,"schema":{"type":"string"},"index$":0},{"name":"rows","in":"query","description":"Number of results to return per page","required":false,"schema":{"type":"integer","default":20},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0},"index$":2}],"securitySource":"unspecified"},"GET /journals/{issn}/works":{"protocol":"http","operationId":"getJournalWorks","responses":{"200":{"description":"Successful response with works metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":"ok","key$":"status","type":"string"},"message-type":{"example":"work-list","key$":"message-type","type":"string"},"message-version":{"example":"1.0.0","key$":"message-version","type":"string"},"message":{"key$":"message","properties":{"items":{"items":{"properties":{"DOI":{"description":"Digital Object Identifier","type":"string"},"ISSN":{"items":{"type":"string"},"type":"array"},"URL":{"description":"URL to the work","type":"string"},"abstract":{"type":"string"},"author":{"items":{"properties":{"ORCID":{"type":"string"},"family":{"type":"string"},"given":{"type":"string"}},"type":"object"},"type":"array"},"container-title":{"items":{"type":"string"},"type":"array"},"is-referenced-by-count":{"type":"integer"},"published":{"properties":{"date-parts":{"items":{"items":{"type":"integer"},"type":"array"},"type":"array"}},"type":"object"},"publisher":{"type":"string"},"reference-count":{"type":"integer"},"title":{"items":{"type":"string"},"type":"array"},"type":{"type":"string"}},"type":"object","x-ref":"#/components/schemas/Work"},"type":"array","key$":"items"},"items-per-page":{"type":"integer","key$":"items-per-page"},"query":{"type":"object","key$":"query"},"total-results":{"type":"integer","key$":"total-results"}},"type":"object","index$":0}},"x-ref":"#/components/schemas/WorksResponse"}}}},"404":{"description":"Journal not found"}},"parameters":[{"name":"issn","in":"path","description":"ISSN of the journal","required":true,"schema":{"type":"string"},"index$":0},{"name":"rows","in":"query","description":"Number of results to return per page","required":false,"schema":{"type":"integer","default":20},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0},"index$":2}],"securitySource":"unspecified"},"GET /members/{id}/works":{"protocol":"http","operationId":"getMemberWorks","responses":{"200":{"description":"Successful response with works metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":"ok","key$":"status","type":"string"},"message-type":{"example":"work-list","key$":"message-type","type":"string"},"message-version":{"example":"1.0.0","key$":"message-version","type":"string"},"message":{"key$":"message","properties":{"items":{"items":{"properties":{"DOI":{"description":"Digital Object Identifier","type":"string"},"ISSN":{"items":{"type":"string"},"type":"array"},"URL":{"description":"URL to the work","type":"string"},"abstract":{"type":"string"},"author":{"items":{"properties":{"ORCID":{"type":"string"},"family":{"type":"string"},"given":{"type":"string"}},"type":"object"},"type":"array"},"container-title":{"items":{"type":"string"},"type":"array"},"is-referenced-by-count":{"type":"integer"},"published":{"properties":{"date-parts":{"items":{"items":{"type":"integer"},"type":"array"},"type":"array"}},"type":"object"},"publisher":{"type":"string"},"reference-count":{"type":"integer"},"title":{"items":{"type":"string"},"type":"array"},"type":{"type":"string"}},"type":"object","x-ref":"#/components/schemas/Work"},"type":"array","key$":"items"},"items-per-page":{"type":"integer","key$":"items-per-page"},"query":{"type":"object","key$":"query"},"total-results":{"type":"integer","key$":"total-results"}},"type":"object","index$":0}},"x-ref":"#/components/schemas/WorksResponse"}}}},"404":{"description":"Member not found"}},"parameters":[{"name":"id","in":"path","description":"Member identifier","required":true,"schema":{"type":"string"},"index$":0},{"name":"rows","in":"query","description":"Number of results to return per page","required":false,"schema":{"type":"integer","default":20},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0},"index$":2}],"securitySource":"unspecified"},"GET /types/{id}/works":{"protocol":"http","operationId":"getTypeWorks","responses":{"200":{"description":"Successful response with works metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"example":"ok","key$":"status","type":"string"},"message-type":{"example":"work-list","key$":"message-type","type":"string"},"message-version":{"example":"1.0.0","key$":"message-version","type":"string"},"message":{"key$":"message","properties":{"items":{"items":{"properties":{"DOI":{"description":"Digital Object Identifier","type":"string"},"ISSN":{"items":{"type":"string"},"type":"array"},"URL":{"description":"URL to the work","type":"string"},"abstract":{"type":"string"},"author":{"items":{"properties":{"ORCID":{"type":"string"},"family":{"type":"string"},"given":{"type":"string"}},"type":"object"},"type":"array"},"container-title":{"items":{"type":"string"},"type":"array"},"is-referenced-by-count":{"type":"integer"},"published":{"properties":{"date-parts":{"items":{"items":{"type":"integer"},"type":"array"},"type":"array"}},"type":"object"},"publisher":{"type":"string"},"reference-count":{"type":"integer"},"title":{"items":{"type":"string"},"type":"array"},"type":{"type":"string"}},"type":"object","x-ref":"#/components/schemas/Work"},"type":"array","key$":"items"},"items-per-page":{"type":"integer","key$":"items-per-page"},"query":{"type":"object","key$":"query"},"total-results":{"type":"integer","key$":"total-results"}},"type":"object","index$":0}},"x-ref":"#/components/schemas/WorksResponse"}}}},"404":{"description":"Type not found"}},"parameters":[{"name":"id","in":"path","description":"Type identifier","required":true,"schema":{"type":"string"},"index$":0},{"name":"rows","in":"query","description":"Number of results to return per page","required":false,"schema":{"type":"integer","default":20},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0},"index$":2}],"securitySource":"unspecified"},"GET /works/{doi}":{"protocol":"http","operationId":"getWorkByDoi","responses":{"200":{"description":"Successful response with work metadata","content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","example":"ok"},"message-type":{"type":"string","example":"work"},"message-version":{"type":"string","example":"1.0.0"},"message":{"type":"object","properties":{"DOI":{"description":"Digital Object Identifier","type":"string","key$":"DOI"},"URL":{"description":"URL to the work","type":"string","key$":"URL"},"title":{"items":{"type":"string"},"type":"array","key$":"title"},"author":{"items":{"properties":{"ORCID":{"type":"string"},"family":{"type":"string"},"given":{"type":"string"}},"type":"object"},"type":"array","key$":"author"},"published":{"properties":{"date-parts":{"items":{"items":{"type":"integer"},"type":"array"},"type":"array"}},"type":"object","key$":"published"},"type":{"type":"string","key$":"type"},"container-title":{"items":{"type":"string"},"type":"array","key$":"container-title"},"ISSN":{"items":{"type":"string"},"type":"array","key$":"ISSN"},"publisher":{"type":"string","key$":"publisher"},"abstract":{"type":"string","key$":"abstract"},"reference-count":{"type":"integer","key$":"reference-count"},"is-referenced-by-count":{"type":"integer","key$":"is-referenced-by-count"}},"x-ref":"#/components/schemas/Work","index$":0}},"x-ref":"#/components/schemas/WorkResponse"}}}},"404":{"description":"DOI not found"},"503":{"description":"Service unavailable"}},"parameters":[{"name":"doi","in":"path","description":"Digital Object Identifier (DOI) of the work","required":true,"schema":{"type":"string"},"example":"10.1037/0003-066X.59.1.29","index$":0},{"name":"mailto","in":"query","description":"Email address for polite pool access","required":false,"schema":{"type":"string","format":"email"},"index$":1}],"securitySource":"unspecified"}})
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
  

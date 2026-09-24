
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CrossrefRestSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CrossrefRestSDK.test()
    equal(testsdk instanceof CrossrefRestSDK, true,
      'CrossrefRestSDK.test() must return a client synchronously')
  })

})

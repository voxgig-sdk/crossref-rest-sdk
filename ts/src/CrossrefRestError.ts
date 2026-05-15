
import { Context } from './Context'


class CrossrefRestError extends Error {

  isCrossrefRestError = true

  sdk = 'CrossrefRest'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CrossrefRestError
}


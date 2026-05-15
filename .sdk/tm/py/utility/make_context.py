# CrossrefRest SDK utility: make_context

from core.context import CrossrefRestContext


def make_context_util(ctxmap, basectx):
    return CrossrefRestContext(ctxmap, basectx)

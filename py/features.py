# CrossrefRest SDK feature factory

from feature.base_feature import CrossrefRestBaseFeature
from feature.test_feature import CrossrefRestTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CrossrefRestBaseFeature(),
        "test": lambda: CrossrefRestTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

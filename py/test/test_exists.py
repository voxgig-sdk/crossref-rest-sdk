# ProjectName SDK exists test

import pytest
from crossrefrest_sdk import CrossrefRestSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CrossrefRestSDK.test(None, None)
        assert testsdk is not None

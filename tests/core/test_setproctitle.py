import unittest

from goldcoin.util.setproctitle import setproctitle


class TestSetProcTitle(unittest.TestCase):
    def test_does_not_crash(self):
        setproctitle("goldcoin test title")

import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("GOLDCOIN_ROOT", "~/.goldcoin/mainnet"))).resolve()
STANDALONE_ROOT_PATH = Path(
    os.path.expanduser(os.getenv("GOLDCOIN_STANDALONE_WALLET_ROOT", "~/.goldcoin/standalone_wallet"))
).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("GOLDCOIN_KEYS_ROOT", "~/.goldcoin_keys"))).resolve()

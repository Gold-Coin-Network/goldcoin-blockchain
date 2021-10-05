from setuptools import setup

dependencies = [
    "blspy==1.0.5",  # Signature library
    "chiavdf==1.0.2",  # timelord and vdf verification
    "chiabip158==1.0",  # bip158-style wallet filters
    "chiapos==1.0.4",  # proof of space
    "clvm==0.9.7",
    "clvm_rs==0.1.14",
    "clvm_tools==0.4.3",
    "aiohttp==3.7.4",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.9",  # Binary data management library
    "colorama==0.4.4",  # Colorizes terminal output
    "colorlog==5.0.1",  # Adds color to logs
    "concurrent-log-handler==0.9.19",  # Concurrently log and rotate logs
    "cryptography==3.4.7",  # Python cryptography library for TLS - keyring conflict
    "fasteners==0.16.3",  # For interprocess file locking
    "keyring==23.0.1",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  "keyrings.cryptfile==1.3.8",  # Secure storage for keys on Linux (Will be replaced)
    #  See https://github.com/frispete/keyrings.cryptfile/issues/15
    "PyYAML==5.4.1",  # Used for config file format
    "setproctitle==1.2.2",  # Gives the chia processes readable names
    "sortedcontainers==2.3.0",  # For maintaining sorted mempools
    "websockets==8.1.0",  # For use in wallet RPC and electron UI
    "click==7.1.2",  # For the CLI
    "dnspython==2.1.0",  # Query DNS seeds
    "watchdog==2.1.3",  # Filesystem event watching - watches keyring.yaml
]

upnp_dependencies = [
    "miniupnpc==2.2.2",  # Allows users to open ports on their router
]

dev_dependencies = [
    "pytest",
    "pytest-asyncio",
    "flake8",
    "mypy",
    "black",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
]

kwargs = dict(
    name="goldcoin-blockchain",
    author="Mariano Sorgente",
    author_email="admin@goldcoin-network.net",
    description="goldcoin blockchain full node, farmer, timelord, and wallet.",
    url="https://goldcoin-network.net/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="goldcoin blockchain node",
    install_requires=dependencies,
    setup_requires=["setuptools_scm"],
    extras_require=dict(
        uvloop=["uvloop"],
        dev=dev_dependencies,
        upnp=upnp_dependencies,
    ),
    packages=[
        "build_scripts",
        "goldcoin",
        "goldcoin.cmds",
        "goldcoin.clvm",
        "goldcoin.consensus",
        "goldcoin.daemon",
        "goldcoin.full_node",
        "goldcoin.timelord",
        "goldcoin.farmer",
        "goldcoin.harvester",
        "goldcoin.introducer",
        "goldcoin.plotting",
        "goldcoin.pools",
        "goldcoin.protocols",
        "goldcoin.rpc",
        "goldcoin.server",
        "goldcoin.simulator",
        "goldcoin.types.blockchain_format",
        "goldcoin.types",
        "goldcoin.util",
        "goldcoin.wallet",
        "goldcoin.wallet.puzzles",
        "goldcoin.wallet.rl_wallet",
        "goldcoin.wallet.cc_wallet",
        "goldcoin.wallet.did_wallet",
        "goldcoin.wallet.settings",
        "goldcoin.wallet.trading",
        "goldcoin.wallet.util",
        "goldcoin.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "goldcoin = goldcoin.cmds.goldcoin:main",
            "goldcoin_wallet = goldcoin.server.start_wallet:main",
            "goldcoin_full_node = goldcoin.server.start_full_node:main",
            "goldcoin_harvester = goldcoin.server.start_harvester:main",
            "goldcoin_farmer = goldcoin.server.start_farmer:main",
            "goldcoin_introducer = goldcoin.server.start_introducer:main",
            "goldcoin_timelord = goldcoin.server.start_timelord:main",
            "goldcoin_timelord_launcher = goldcoin.timelord.timelord_launcher:main",
            "goldcoin_full_node_simulator = goldcoin.simulator.start_simulator:main",
        ]
    },
    package_data={
        "goldcoin": ["pyinstaller.spec"],
        "": ["*.clvm", "*.clvm.hex", "*.clib", "*.clinc", "*.clsp"],
        "goldcoin.util": ["initial-*.yaml", "english.txt"],
        "goldcoin.ssl": ["goldcoin_ca.crt", "goldcoin_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["cacert.pem"],
    },
    use_scm_version={"fallback_version": "unknown-no-.git-directory"},
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
)


if __name__ == "__main__":
    setup(**kwargs)

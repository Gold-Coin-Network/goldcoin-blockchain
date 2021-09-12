from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "goldcoin_harvester goldcoin_timelord_launcher goldcoin_timelord goldcoin_farmer goldcoin_full_node goldcoin_wallet".split(),
    "node": "goldcoin_full_node".split(),
    "harvester": "goldcoin_harvester".split(),
    "farmer": "goldcoin_harvester goldcoin_farmer goldcoin_full_node goldcoin_wallet".split(),
    "farmer-no-wallet": "goldcoin_harvester goldcoin_farmer goldcoin_full_node".split(),
    "farmer-only": "goldcoin_farmer".split(),
    "timelord": "goldcoin_timelord_launcher goldcoin_timelord goldcoin_full_node".split(),
    "timelord-only": "goldcoin_timelord".split(),
    "timelord-launcher-only": "goldcoin_timelord_launcher".split(),
    "wallet": "goldcoin_wallet goldcoin_full_node".split(),
    "wallet-only": "goldcoin_wallet".split(),
    "introducer": "goldcoin_introducer".split(),
    "simulator": "goldcoin_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())

from dataclasses import dataclass
from typing import List

from goldcoin.types.blockchain_format.coin import Coin
from goldcoin.types.blockchain_format.program import SerializedProgram, INFINITE_COST
from goldcoin.util.chain_utils import additions_for_solution
from goldcoin.util.streamable import Streamable, streamable


@dataclass(frozen=True)
@streamable
class CoinSpend(Streamable):
    """
    This is a rather disparate data structure that validates coin transfers. It's generally populated
    with data from different sources, since burned coins are identified by name, so it is built up
    more often that it is streamed.
    """

    coin: Coin
    puzzle_reveal: SerializedProgram
    solution: SerializedProgram

    def additions(self) -> List[Coin]:
        return additions_for_solution(self.coin.name(), self.puzzle_reveal, self.solution, INFINITE_COST)

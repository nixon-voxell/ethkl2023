// SPDX-License-Identifier: GPL-3.0
import "hardhat/console.sol";

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Vote {
    uint8 constant MAX_VOTER_COUNT = 7;
    uint8 constant WAIFU_COUNT = 2;
    uint256 constant BET_MIN_THRESHOLD = 100;

    uint256 number;
    Voters voters;
    Players players;
    uint8 voterCount = 0;
    uint8 playerCount = 0;
    uint256[] totalVoteCounts = new uint256[](WAIFU_COUNT);
    uint256[] totalBetAmounts = new uint256[](WAIFU_COUNT);

    constructor() {
        voters = Voters(
            new address[](MAX_VOTER_COUNT),
            new uint256[](MAX_VOTER_COUNT),
            new uint64[](MAX_VOTER_COUNT)
        );
        players = Players(
            new address[](WAIFU_COUNT),
            new uint256[](WAIFU_COUNT)
        );
    }

    function addPlayer() public payable {
        players.adds[playerCount] = msg.sender;
        players.betAmounts[playerCount] = msg.value;
        playerCount += 1;
    }

    /**
     * @dev Add voter to the contract.
     */
    function addVoter(uint64 waifuIndex) public payable returns (bool) {
        if (msg.value < BET_MIN_THRESHOLD) return false;
        if (voterCount >= MAX_VOTER_COUNT) return false;
        // waifulIndex can only be 0 and 1
        if (waifuIndex != 0 && waifuIndex != 1) return false;
        if (players.adds[0] == address(0) || players.adds[1] == address(0))
            return false;

        // Set voter data into a new slot
        voters.adds[voterCount] = msg.sender;
        voters.betAmounts[voterCount] = msg.value;
        voters.waifuIndices[voterCount] = waifuIndex;

        totalVoteCounts[waifuIndex] += 1;
        totalBetAmounts[waifuIndex] += msg.value;

        voterCount += 1;

        console.log("Betting on Waifu #", waifuIndex);
        console.log("Bet amount:", msg.value);
        console.log(
            "Waifu now has total count of:",
            totalVoteCounts[waifuIndex]
        );
        console.log("Waifu now has total bet of:", totalBetAmounts[waifuIndex]);

        if (voterCount >= MAX_VOTER_COUNT) {
            updateWinner();

            // Reset the entire contract status
            resetGame();
        }

        return true;
    }

    function updateWinner() internal {
        console.log("updating winner");
        uint largestVoteCount = 0;
        uint winnerWaifuIndex = 0;

        // Find the winner waifu's index
        for (uint waifuIndex = 0; waifuIndex < WAIFU_COUNT; waifuIndex++) {
            if (totalVoteCounts[waifuIndex] > largestVoteCount) {
                largestVoteCount = totalVoteCounts[waifuIndex];
                winnerWaifuIndex = waifuIndex;
            }
        }

        uint256 loserTotalBetAmount = 0;

        for (uint waifuIndex = 0; waifuIndex < WAIFU_COUNT; waifuIndex++) {
            if (waifuIndex != winnerWaifuIndex) {
                loserTotalBetAmount += totalBetAmounts[waifuIndex];
            }
        }
        uint256 winnerTotalBetAmount = totalBetAmounts[winnerWaifuIndex];

        console.log("Winner waifu index:", winnerWaifuIndex);
        console.log("Winner total bet amount: ", winnerTotalBetAmount);
        console.log("Loser total bet amount:", loserTotalBetAmount);

        for (uint v = 0; v < voters.adds.length; v++) {
            uint256 winAmount;
            if (voters.waifuIndices[v] == winnerWaifuIndex) {
                winAmount =
                    (voters.betAmounts[v] * loserTotalBetAmount) /
                    winnerTotalBetAmount;

                console.log("Winner: ", winAmount);
                console.log("Bet amount:", voters.betAmounts[v]);
                payable(voters.adds[v]).transfer(
                    winAmount + voters.betAmounts[v]
                );
            } else {
                winAmount = 0;
                console.log("Loser: ", winAmount);
            }
        }

        // This only works if there is only 2 waifus/players
        // TODO: support this for more than 2 waifus/players
        uint loserWaifuIndex = winnerWaifuIndex == 0 ? 1 : 0;
        payable(players.adds[winnerWaifuIndex]).transfer(
            players.betAmounts[loserWaifuIndex]
        );
    }

    /**
     * Reset the entire contract status.
     */
    function resetGame() internal {
        voterCount = 0;
        playerCount = 0;

        for (uint v = 0; v < MAX_VOTER_COUNT; v++) {
            voters.adds[v] = address(0);
            voters.betAmounts[v] = 0;
            voters.waifuIndices[v] = 0;
        }

        for (uint p = 0; p < WAIFU_COUNT; p++) {
            players.adds[p] = address(0);
            players.betAmounts[p] = 0;

            totalVoteCounts[p] = 0;
            totalBetAmounts[p] = 0;
        }
    }

    struct Voters {
        address[] adds;
        uint256[] betAmounts;
        uint64[] waifuIndices;
    }

    struct Players {
        address[] adds;
        uint256[] betAmounts;
    }
}

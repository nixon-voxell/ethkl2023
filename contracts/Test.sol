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

    uint256 number;
    Voters voters;
    uint8 voter_count = 0;
    uint totalVoteA = 0;
    uint totalVoteB = 0;
    uint256 totalBetAmountA;
    uint256 totalBetAmountB;
    uint256 winAmount;

    /**
     * @dev Add voter to the contract.
     */
    function add_voter(uint256 bet_amount, uint64 waifu_index) public returns (bool) {
        if (voter_count >= MAX_VOTER_COUNT) return false;

        // Set voter data into a new slot
        voters.adds[voter_count] = msg.sender;
        voters.bet_amounts[voter_count] = bet_amount;
        voters.waifu_indices[voter_count] = waifu_index;

        if (waifu_index == 0) {
            totalVoteA++;
            totalBetAmountA += bet_amount;
        } else if (waifu_index== 1) {
            totalVoteB++;
            totalBetAmountB += bet_amount;
        }


        voter_count += 1;

        return true;
    }

    

    function updateWinner() public returns (uint256){
        if (totalVoteA > totalVoteB) {
            uint totalBetAmountWinner = totalBetAmountA;
            for (uint i = 0; i < voters.adds.length; i++) {
                if (voters.waifu_indices[i] == 0) {
                    winAmount = (voters.bet_amounts[i] * totalBetAmountWinner) / totalBetAmountA;
                    console.log("Winner: ", winAmount);
                } else {
                    winAmount = 0;
                    console.log("Loser: ", winAmount);
                }
            }
        
        }
        return winAmount;  
    }


    constructor() {
        voters = Voters(
            new address[](10),
            new uint256[](10),
            new uint64[](10)
        );
        
    }

    struct Voters {
        address[] adds;
        uint256[] bet_amounts;
        uint64[] waifu_indices;
    }

    /**
     * Execute voting session,
     */
    function execute_voting_match() internal pure {
        
    }
}

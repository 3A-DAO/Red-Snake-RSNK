// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.28;

/**
 * @title Red Snake Token (RSNK)
 * @author 0xCR6
 * @dev ERC20 token for 3A DAO's Red Snake
 *
 *                    🌙 TO THE MOON 🌙
 *                        
 *                    ╔════•°•°••°•°════╗   
 *                      $RSNK IS COMING    
 *                    ╚════•°•°••°•°════╝   
 *                                    
 *           /^\/^\
 *         _|__|  O|
 *\/     /~     \_/ \
 * \____|__________/  \
 *        \_______      \
 *                `\     \                 \
 *                  |     |                  \
 *                 /      /                    \
 *                /     /                       \\
 *              /      /                         \ \
 *             /     /                            \  \
 *           /     /             _----_            \   \
 *          /     /           _-~      ~-_         |   |
 *         (      (        _-~    _--_    ~-_     _/   |
 *          \      ~-____-~    _-~    ~-_    ~-_-~    /
 *            ~-_           _-~          ~-_       _-~
 *               ~--______-~                ~-___-~
 *              
 *           🔥 8,888,888,888 $RSNK 🔥
 *     ⚡️ The Most Dangerous Memecoin Alive ⚡️
 *        
 *     💎 HODL THE SNAKE, BECOME THE SNAKE 💎
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RedSnake is ERC20 {
    constructor(address initialHolder) ERC20("Red Snake", "RSNK") {
        // Mint the total supply to the specified address
        // 8,888,888,888 tokens with 18 decimals
        _mint(initialHolder, 8888888888 * 10 ** decimals());
    }
}

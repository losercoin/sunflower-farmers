// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// File: contracts/interfaces/IUniswapV2Router01.sol

pragma solidity >=0.6.2;

interface IUniswapV2Router01 {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETH(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountETH);
    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETHWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountToken, uint amountETH);
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);

    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);
    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);
    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);
    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}


pragma solidity >=0.6.2;


interface IUniswapV2Router02 is IUniswapV2Router01 {
    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountETH);
    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountETH);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}

// pragma solidity >=0.5.0;

interface IUniswapV2Factory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}


pragma solidity >=0.5.0;

interface IUniswapV2Pair {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external pure returns (string memory);
    function symbol() external pure returns (string memory);
    function decimals() external pure returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    function nonces(address owner) external view returns (uint);

    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;

    event Mint(address indexed sender, uint amount0, uint amount1);
    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
    event Swap(
        address indexed sender,
        uint amount0In,
        uint amount1In,
        uint amount0Out,
        uint amount1Out,
        address indexed to
    );
    event Sync(uint112 reserve0, uint112 reserve1);

    function MINIMUM_LIQUIDITY() external pure returns (uint);
    function factory() external view returns (address);
    function token0() external view returns (address);
    function token1() external view returns (address);
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function price0CumulativeLast() external view returns (uint);
    function price1CumulativeLast() external view returns (uint);
    function kLast() external view returns (uint);

    function mint(address to) external returns (uint liquidity);
    function burn(address to) external returns (uint amount0, uint amount1);
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
    function skim(address to) external;
    function sync() external;

    function initialize(address, address) external;
}


contract PrayToPotatoStatue {
    using SafeMath for uint256;

    IUniswapV2Router02 public immutable uniswapV2Router;

    address private sunflowerTeam;
    uint private _randSeed;
    uint public prize;
    uint public lastPrayAt;
    uint public lastPrize;
    uint public BASE = 10000;

    event Pray(address player, uint lucky, uint dice);


    constructor() {
        IUniswapV2Router02 _uniswapV2Router = IUniswapV2Router02(0x865bfde337C8aFBffF144Ff4C29f9404EBb22b15);

        // set the rest of the contract variables
        uniswapV2Router = _uniswapV2Router;

        sunflowerTeam = msg.sender;

        _randSeed = uint(keccak256(abi.encode(block.timestamp, msg.sender)));
    }

    function changePrize(uint _prize) public {
        require(msg.sender == sunflowerTeam, "NO ACCESS");
        prize = _prize;
    }

    function pullFunds() public {
        require(msg.sender == sunflowerTeam, "NO ACCESS");
        uint amount = IERC20(0xC9a9bE0f88b44889F30EA0978e984FB5a6eFE68b).balanceOf(address(this));
        IERC20(0xC9a9bE0f88b44889F30EA0978e984FB5a6eFE68b).transfer(msg.sender, amount);
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    function pray() public payable {
        require (IERC721(0xFdd285FaC915416d577c60f3351bd527d6180334).balanceOf(msg.sender) > 0, "You don't have the statue");
        // Grab the SFF cost
        (uint sff, uint lucky,) = getInfo();
        
        payOut(sff);

        // award
        _randSeed = uint(keccak256(abi.encode(block.timestamp, msg.sender, _randSeed)));
        uint dice = _randSeed.mod(BASE);
        if (dice < lucky.div(5)) {
            IERC20(0xC9a9bE0f88b44889F30EA0978e984FB5a6eFE68b).transfer(msg.sender, prize.mul(5));
            lastPrize = prize.mul(5);
        }
        else if (dice < lucky.mul(3).div(5)) {
            IERC20(0xC9a9bE0f88b44889F30EA0978e984FB5a6eFE68b).transfer(msg.sender, prize.div(2));
            lastPrize = prize.div(2);
        }
        else {
            lastPrize = 0;
        }
        emit Pray(msg.sender, lucky, dice);
        lastPrayAt = block.timestamp;
    }

    // offer sff and okt
    function payOut(uint sff) public payable {
        // Transfer tokens to this contract so we can provide liquidity
        IERC20(0x89C7Fc93bb78dDF809E3F317501563a6323E22CD).transferFrom(msg.sender, sunflowerTeam, sff);
    }

    function getInfo() public view returns (uint sff, uint lucky, uint _prize) {
        (uint _reserve0, uint _reserve1, ) = IUniswapV2Pair(0x523d66B83C8a571Cb6e836Fb904b931738781f94).getReserves();
        uint t = block.timestamp.sub(lastPrayAt);
        uint TWO_HOURS = 7200;
        lucky = t >= TWO_HOURS? BASE : BASE.sub(BASE.mul((TWO_HOURS.sub(t))**2).div(TWO_HOURS**2));
        return (prize.mul(_reserve0).div(_reserve1), lucky, prize);
    }
}

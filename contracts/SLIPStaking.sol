pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SLIPStaking {
    IERC20 public mocaToken;
    mapping(uint256 => Pool) public pools;

    struct Pool {
        address[] members;
        uint256 stakedAmount;
        address sessionKey;
        bool active;
    }

    event PoolCreated(uint256 poolId, address[] members, address sessionKey);
    event Staked(uint256 poolId, address staker, uint256 amount);
    event Slashed(uint256 poolId, uint256 amount);

    constructor(address _mocaToken) {
        mocaToken = IERC20(_mocaToken);
    }

    function createPool(address[] memory _members, address _sessionKey) external {
        uint256 poolId = uint256(keccak256(abi.encodePacked(msg.sender, block.timestamp)));
        pools[poolId] = Pool(_members, 0, _sessionKey, true);
        emit PoolCreated(poolId, _members, _sessionKey);
    }

    function stake(uint256 _poolId, uint256 _amount) external {
        require(pools[_poolId].active, "Inactive pool");
        require(mocaToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        pools[_poolId].stakedAmount += _amount;
        emit Staked(_poolId, msg.sender, _amount);
    }

    function slash(uint256 _poolId, uint256 _amount) external {
        require(pools[_poolId].active, "Inactive pool");
        require(_amount <= pools[_poolId].stakedAmount, "Insufficient stake");
        pools[_poolId].stakedAmount -= _amount;
        // Simulate burn or transfer to treasury (for demo)
        emit Slashed(_poolId, _amount);
    }

    function getPool(uint256 _poolId) external view returns (Pool memory) {
        return pools[_poolId];
    }
}
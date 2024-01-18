// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenVoting {
    address public admin;
    IERC20 public token;

    struct Proposal {
        string description;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => uint256) public votes;

    event ProposalCreated(uint256 proposalId, string description);
    event Voted(uint256 proposalId, address voter, bool inSupport);
    event ProposalExecuted(uint256 proposalId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    modifier onlyTokenHolder() {
        require(token.balanceOf(msg.sender) > 0, "Not a token holder");
        _;
    }

    modifier validProposal(uint256 proposalId) {
        require(proposalId < proposals.length, "Invalid proposal");
        _;
    }

    constructor(address _token) {
        admin = msg.sender;
        token = IERC20(_token);
    }

    function createProposal(string memory _description) external onlyTokenHolder {
        proposals.push(Proposal(_description, 0, 0, false));
        emit ProposalCreated(proposals.length - 1, _description);
    }

    function vote(uint256 _proposalId, bool _inSupport) external onlyTokenHolder validProposal(_proposalId) {
        require(!proposals[_proposalId].executed, "Proposal already executed");
        uint256 voteWeight = token.balanceOf(msg.sender);

        if (_inSupport) {
            proposals[_proposalId].forVotes += voteWeight;
        } else {
            proposals[_proposalId].againstVotes += voteWeight;
        }

        votes[msg.sender] = _proposalId;
        emit Voted(_proposalId, msg.sender, _inSupport);
    }

    function executeProposal(uint256 _proposalId) external onlyAdmin validProposal(_proposalId) {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");

        uint256 totalVotes = proposal.forVotes + proposal.againstVotes;

        // Check if the proposal has enough support
        require(proposal.forVotes > proposal.againstVotes, "Not enough support");
        
        // Mark the proposal as executed
        proposal.executed = true;

        emit ProposalExecuted(_proposalId);
    }
}
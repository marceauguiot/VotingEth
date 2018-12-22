// credits to Stephen Grider which Udemy's course @StephenGrider/EthereumCasts
// inspired us to create this contract
// @MarcCSZN
pragma solidity ^0.4.17;

contract VotingFactory {
  address[] public deployedCampaings;

  function createCampaign(string description) public {
        address newCampaign = new Voting(description, msg.sender);
        deployedCampaings.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaings;
    }
}


contract Voting {
  struct Election {
    string description;
    bool open;
    bool complete;
    uint yesCount;
    uint noCount;
    uint blankCount;
    mapping(address => bool) hasVoted;
  }

  Election[] public elections;
  address public admin;
  string public descriptionCampaign;
  mapping(address => bool) public voters;
  uint public votersCount;

  // this function creates a restiction blocks other funcs
  // only admin can execute restricted function
  modifier restricted() {
    require(msg.sender == admin);
    _;
  }

  // Contrustor method only called once by admin
  function Voting(string description, address creator) public {
    admin = creator;
    descriptionCampaign = description;
  }

//  function getDeployedElections() public view returns (Election[]) {
//      return elections;
//  }

  function getSummary() public view returns (
     uint, uint, uint, address
    ) {
      return (
        this.balance,
        elections.length,
        votersCount,
        admin
      );
  }

  // this function is called only after security processes in browser
  // increment count of total voters
  function becomeVoter() public {
    voters[msg.sender] = true;
    votersCount++;
  }


  // election can only be created by the admin
  // it belongs to the wider Voting contract
  // the election can be accessed through the contract by registred voters
  function createElection(string description) public restricted {
      Election memory newElection = Election({
        description:description,
        open: true,
        complete: false,
        yesCount: 0,
        noCount:0,
        blankCount:0
        });

      elections.push(newElection);
  }

  // this function is for voting it returns a string value to confirm the voted
  // it takes two inputs index and choice: index for the election index & choice
  // index can take any value, choice can take either value 0, 1 or 2.
  function approveCandidate(uint index, uint choice) public returns (string) {
    // 'storage' is for temp memory! 'memory' is for long term
    // here we make a short cut to our data
    Election storage election = elections[index];

    // checks if elections are open
    require((election.open) && (!election.complete));
    // checks if approver is a voter for the election
    require(voters[msg.sender]);

    // if approver has already voted he gets kicked out
    // if not then he's allowed to vote
    require(!election.hasVoted[msg.sender]);

    // voter has voted !
    election.hasVoted[msg.sender] = true;

    // putting the vote in the right place !
    // returns a string value to make user exit contract
    // string value should confirm user vote has been counted
    if (choice == 0) {
      election.yesCount++;
      return ("Your vote is counted!");
    }
    if (choice == 1) {
      election.noCount++;
      return ("Your vote is counted!");
    }
    if (choice == 2) {
      election.blankCount++;
      return ("Your vote is counted!");
    }
  }

  function finalizeElection(uint index) public restricted returns (uint yes, uint no, uint blank) {
    // short cut data
    Election storage election = elections[index];

    // check if request is not already completed and if it has begun
    require(election.open);
    require(!election.complete);

    // check mark the election as complete and closed
    election.complete = true;
    election.open = false;

    // returns the values !
    return (election.yesCount, election.noCount, election.blankCount);
  }
}

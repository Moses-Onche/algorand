import { Contract } from '@algorandfoundation/tealscript';

class Dao extends Contract {
  // define a proposal
  // make it easy for voters to see what the proposal is

  getProposal(): string {
    return "This is a proposal.";
  }
}
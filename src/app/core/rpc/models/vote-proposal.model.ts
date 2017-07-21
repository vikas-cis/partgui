export class VoteProposal {

  proposal: number;
  option: number;
  from_height: number;
  to_height: number;
  added: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  getRpcArray(): Array<any> {
  	return [this.proposal, this.option, this.from_height, this.to_height];
  }
}
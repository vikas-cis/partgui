import { Injectable } from '@angular/core';
import { Log } from 'ng2-logger';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { RPCService } from './rpc.service';

import { VoteProposal } from './models/vote-proposal.model';

@Injectable()
export class VoteService {

  log: any = Log.create('vote.service');

  private _voteHistory: Observable<Array<VoteProposal>>;
  private _observerVoteHistory: Observer<Array<VoteProposal>>;

  constructor(private _rpc: RPCService) {
  	this._voteHistory = Observable.create(observer => this._observerVoteHistory = observer).publishReplay(1).refCount();
    this._voteHistory.subscribe().unsubscribe();

    this._rpc.call(this, 'votehistory', null, this.rpc_getVoteHistory);
  }

  private rpc_getVoteHistory(json: any): void {
  	const voteHistory = json.map(
  		(proposal) => new VoteProposal(proposal)
	);

  	this._observerVoteHistory.next(voteHistory);
  }

  public rpc_setVote(proposal: VoteProposal) {
  	this._rpc.call(this, 'setvote', proposal.getRpcArray(), this.rpc_setVote_success);
  }

  private rpc_setVote_success(json: object) {
  	this.log.d('rpc_setVote_success, ', json.result);
  	
  }
}

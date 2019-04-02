import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import mockgetpeerinfo from './mock-data/getpeerinfo.mock';
import mocklistunspent from './mock-data/listunspent.mock';
import mockgetwalletinfo from './mock-data/getwalletinfo.mock'

// TODO: create & move into the testing module
// TODO: add more calls, currently only used in SendComponent

@Injectable()
export class RpcMockService {

  constructor() { }

  call(method: string, params?: Array<any> | null): Observable<any> {
    return Observable.create(observer => {
      switch (method) {
        case 'getpeerinfo':
          observer.next(mockgetpeerinfo);
          break;

        case 'listunspent':
          observer.next(mocklistunspent);
          break;

        case 'getwalletinfo':
          observer.next(mockgetwalletinfo);
          break;

        default:
          observer.next(true);
          break;
      }
      observer.complete();
    });
  }

}

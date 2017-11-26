import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

// TODO: Remove the following after all consuming entities have been upgraded:
import { downgradeInjectable } from '@angular/upgrade/static';
import * as _angular_ from 'angular';
declare global {
  const angular: typeof _angular_;
}

@Injectable()
export class Dataservice {
  constructor(
    private http: Http,
    @Inject('exception') private exception: any
  ) { }

  getMessageCount () {
    return Observable.of(72);
  }

  getPeople() {
    return this.http.get('/api/people')
      .map(data => data.json())
      .catch(e => this.exception.catcher('XHR Failed for getPeople')(e));
  }
}

// TODO: Remove the following after all consuming entities have been upgraded:
angular
  .module('app.core')
  .factory('dataservice', downgradeInjectable(Dataservice));

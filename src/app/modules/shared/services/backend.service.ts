// (c) Siemens Healthcare GmbH / Siemens Medical Solutions USA Inc. 2022. All rights reserved.
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvailableDeleteActions, AvailableGetActions, AvailablePatchActions, AvailablePostActions, AvailablePutActions } from '@shared/models/available-actions';

import * as _ from 'lodash';

// Service for backend
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  urlPaths: any = {
    GetAllStepsByProjectName: '{endpoint}/Project/{projectName}/Steps',
    StartWorkflow: '{endpoint}/Workflow/Start',
  };
  endpointPrefix = '';
  endpoint = 'https://localhost:7278';

  constructor(public http: HttpClient) {}

  get<T>(key: AvailableGetActions, params = {}, options = {}, smartSubstitution = {}): Observable<T> {
    let url = this.resolveUrl(key);
    options = {
      ...options,
      params: params
        ? new HttpParams({
            fromObject: params,
          })
        : {},
    };

    if (smartSubstitution) {
      url = this.updateSmartURL(url, smartSubstitution);
    }
    return this.http.get<T>(url, options);
  }

  put(key: AvailablePutActions, params = {}, options = {}): Observable<any> {
    const url = this.resolveUrl(key);
    return this.http.put(url, params || {}, options);
  }

  patch(key: AvailablePatchActions, params = {}, options = {}, smartSubstitution = {}): Observable<any> {
    let url = this.resolveUrl(key);
    if (smartSubstitution) {
      url = this.updateSmartURL(url, smartSubstitution);
    }
    return this.http.patch(url, params || {}, options);
  }

  post(key: AvailablePostActions, body = {}, options = {}, smartSubstitution = {}): Observable<any> {
    let url = this.resolveUrl(key);
    if (smartSubstitution) {
      url = this.updateSmartURL(url, smartSubstitution);
    }

    return this.http.post(url, body || {}, options);
  }

  delete(key: AvailableDeleteActions, params = {}, options = {}, smartSubstitution = {}): Observable<any> {
    let url = this.resolveUrl(key);
    options = { ...options, params: params || {} };
    if (smartSubstitution) {
      url = this.updateSmartURL(url, smartSubstitution);
    }
    return this.http.delete(url, options);
  }

  resolveUrl(key: string) {
    const urlString: string = this.urlPaths[key];
    return _.replace(urlString, '{endpointPrefix}', this.endpointPrefix).replace('{endpoint}', this.endpoint);
  }

  updateSmartURL(url: string, smartSubstitution: any) {
    return url.replace(/\{([a-zA-Z0-9]*)\}/g, (match, val) => smartSubstitution[val]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class FlowInfo{
  id: number
  name: string
  actionContent: string
  conditionContent: string
  conditionId: number
  actionId: number
  salienceNo: number
}

export class ConditionInfo{
  id: number
  name: string
}

export class ActionInfo{
  id: number
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class FlowinfoService {
  private baseUrl = '/v1/flows';
  private conditionUrl = '/v1/conditions';

  constructor(private http: HttpClient) { }

  getFlow(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFlow(flowInfo: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/0`, flowInfo);
  }

  updateFlow(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFlow(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFlowsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/0`);
  }

  getConditionsList(): Observable<any> {
    return this.http.get(`${this.conditionUrl}/0`);
  }
}

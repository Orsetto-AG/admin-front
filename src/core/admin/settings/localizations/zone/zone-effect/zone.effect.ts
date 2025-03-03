/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import * as actions from '../zone-action/zone.action';
import { ZoneService } from '../zone.service';

@Injectable()
export class ZoneEffect {
  constructor(private action$: Actions, private service: ZoneService) {}

  // NEW ZONE
  
  doAddZone$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_ADD_ZONE),
    map((action: actions.DoNewZoneAction) => action.payload),
    switchMap(state => {
      return this.service.addZone(state).pipe(
        switchMap(zone => [new actions.DoNewZoneSuccessAction(zone)]),
        catchError(error => of(new actions.DoNewZoneFailAction(error)))
      );
    })
  ));
  // Update Zone
  
  doUpdateZone$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_UPDATE_ZONE),
    map((action: actions.DoUpdateZoneAction) => action.payload),
    switchMap(state => {
      return this.service.updateZone(state).pipe(
        map(analysis => new actions.DoUpdateZoneSuccessAction(analysis)),
        catchError(error => of(new actions.DoUpdateZoneFailAction(error)))
      );
    })
  ));

  // ZONE LIST PAGINATION
  
  dozonepagination$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.GET_ZONE_COUNT_ACTION),
    map((action: actions.GetZoneCountAction) => action.payload),
    switchMap(state => {
      return this.service.zonePagiantion(state).pipe(
        switchMap(user => [new actions.GetZoneCountSuccessAction(user)]),
        catchError(error => of(new actions.GetZoneCountFailAction(error)))
      );
    })
  ));
  // ZONE LIST
  
  dozonelists$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.GET_ZONE_LIST),
    map((action: actions.GetZoneListAction) => action.payload),
    switchMap(state => {
      return this.service.zoneList(state).pipe(
        switchMap(user => [new actions.GetZoneListSuccessAction(user)]),
        catchError(error => of(new actions.GetZoneListFailAction(error)))
      );
    })
  ));
  // Zone Delete
  
  doZoneDelete$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(actions.ActionTypes.DO_ZONE_DELETE),
    map((action: actions.DoZoneDeleteAction) => action.payload),
    switchMap(state => {
      const zoneId = state.zoneId;
      return this.service.deleteZone(state, zoneId).pipe(
        switchMap(user => [new actions.DoZoneDeleteSuccessAction(user)]),
        catchError(error => of(new actions.DoZoneDeleteFailAction(error)))
      );
    })
  ));
}

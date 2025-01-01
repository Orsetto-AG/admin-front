/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
import * as actions from '../action/common.action';
import { CommonState, CommonStateRecord } from './common.state';

export const initialState: CommonState = new CommonStateRecord() as unknown as CommonState;

export function reducer(
  state = initialState,
  { type, payload }: any
): CommonState {
  if (!type) {
    return state;
  }

  switch (type) {
    case actions.ActionTypes.DO_LOGOUT: {
      return Object.assign({}, state, {});
    }
    case actions.ActionTypes.DO_LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        logout: payload
      });
    }
    case actions.ActionTypes.DO_LOGOUT_FAIL:
      {
        return Object.assign({}, state, {});
      }
      {
        return Object.assign({}, state, { failed: true });
      }
    default: {
      return state;
    }
  }
}

export const getlogout = (state: CommonState) => state.logout;

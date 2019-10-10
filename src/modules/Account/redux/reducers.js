import * as Types from './constants';
import produce from "immer";
import { delCookie } from "base/helper/cookie";

const initialState = {
  authUser: sessionStorage.getItem("USER") ? JSON.parse(sessionStorage.getItem("USER")) : null,
  ocPoint: null
};

export default function AuthReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {

      case Types.LOGIN_SUCCESS: {
        draft.authUser = payload;
        break;
      }

      case Types.LOGOUT: {
        delCookie("token");
        sessionStorage.removeItem("USER");
        localStorage.removeItem("ADDRESS");
        draft.authUser = null;
        draft.ocPoint = null;
        break;
      }

      case Types.GET_OC_SUCCESS: {
        draft.ocPoint = payload;
        break;
      }
    }
  })
}

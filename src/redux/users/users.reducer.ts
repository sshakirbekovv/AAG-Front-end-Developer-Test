import { UserResponse } from "../../types/user.types";
import { UsersAction, UsersActionTypes } from "./users.types";

interface UsersState {
  users: UserResponse | null;
  error: string;
}

const defaultState = {
  users: null,
  error: "",
};

export const userReducer = (
  state: UsersState = defaultState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case `${UsersActionTypes.CREATE_USER}_FULFILLED`:
      return {
        ...state,
        users: {
          data: [
            ...state.users!.data, action.payload
          ]
        },
      };
    case `${UsersActionTypes.GET_USERS}_FULFILLED`:
      return {
        ...state,
        users: action.payload,
      };
    case `${UsersActionTypes.UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        users: {
          data: [
              ...state.users!.data.map((user) =>
                user.rooftopGoogleOptionId === action.payload.id ? action.payload : user
              ),
            ],
        }
      };
    case `${UsersActionTypes.DELETE_USER}_FULFILLED`:
      return {
        ...state,
        users: {
          data: state.users!.data.filter((user) => user.rooftopGoogleOptionId !== action.meta.id),
        }
      };
    default:
      return state;
  }
};

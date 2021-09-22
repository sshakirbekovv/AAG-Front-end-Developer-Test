import {
  creaeteUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../../api/users.api";
import { UsersPost } from "../../types/user.types";
import { UsersActionTypes } from "./users.types";

export const creaeteUserAction = (data: UsersPost) => ({
  type: UsersActionTypes.CREATE_USER,
  payload: creaeteUser(data),
});

export const getUsersAction = () => ({
  type: UsersActionTypes.GET_USERS,
  payload: getUsers(),
});

export const updateUserAction = (data: UsersPost, id: number) => ({
  type: UsersActionTypes.UPDATE_USER,
  payload: updateUser(data, id),
});

export const deleteUserAction = (id: number) => ({
  type: UsersActionTypes.DELETE_USER,
  payload: deleteUser(id),
  meta: { id },
});

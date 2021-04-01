import { takeLatest, put, take } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import {
  GET_CURRENT_USER_INFO,
  setCurrentUser,
  SET_CART_ITEMS,
} from "./../actions";
import { formatCurrency } from "../utility";

export function* loadItemDetials() {
  console.log("item" + item);
}

export function* itemDetailsSaga() {
  const { items } = yield take(SET_CART_ITEMS);
  yield items.map((items) => formatCurrency(loadItemDetials, item));
}

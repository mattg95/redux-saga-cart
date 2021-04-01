import { takeLatest, put, call, take } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { SET_CURRENT_USER, setCartItems } from "./../actions";

export function* fetchCartSaga() {
  const {
    user: { id },
  } = yield take(SET_CURRENT_USER);
  const response = yield call(fetch, `http://localhost:8081/cart/${id}`);
  const { items } = yield response.json();
  yield put(setCartItems(items));
  console.log("CART ITEMS ===>", items);
}

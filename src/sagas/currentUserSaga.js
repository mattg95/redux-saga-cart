import { take, put, call, apply, effectTypes } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { GET_CURRENT_USER_INFO, setCurrentUser } from "./../actions";
import { delay } from "lodash";

export function* currentUserSaga() {
  const { id } = yield take(GET_CURRENT_USER_INFO);
  const response = yield call(fetch, `http://localhost:8081/user/${id}`);
  const data = yield apply(response, response.json);
  yield put(setCurrentUser(data));
  console.log("data=>", data);
}

function* func() {
  while (true) {
    console.log("give up the func");
    yield delay(1000);
  }
}

let saga = function* () {
  while (true) {
    yield effects.fork(func);
  }
};

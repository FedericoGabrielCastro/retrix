import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from "./reducers/rootReducers";
import { wacherSaga } from "./sagas/rootSagas";

// Create saga middleware.
const sagaMiddleware = createSagaMiddleware()

// Content all middlewares.
const middleware = [
    sagaMiddleware
]

// Create Store.
export const store = createStore(
    rootReducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(wacherSaga)
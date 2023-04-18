
// export default configureStore({
// 	reducer: { forTest: testReducer }
// });
import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer,
	FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist';
import testReducer from "./myreducer";

const persistConfig = {
    key: 'root',
    storage:storage
};

const reducers = combineReducers({ forTest: testReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
	getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});
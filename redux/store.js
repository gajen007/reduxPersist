import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./myreducer";

export default configureStore({
	reducer: {
		forTest: testReducer
	}
});
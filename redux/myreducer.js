import { createSlice } from "@reduxjs/toolkit";

export const test = createSlice({
	name: "forTest",
	initialState: { dataValue:""},
	reducers: {
		saveToStore: (state, action) => {
			state.dataValue=action.payload;
		}
	}
});

export const getCurrentData = state => state.forTest.dataValue;
export const { saveToStore } = test.actions;
export default test.reducer;
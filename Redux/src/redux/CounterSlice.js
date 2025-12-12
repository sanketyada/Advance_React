import { createSlice } from "@reduxjs/toolkit";

// state is the entire state object of your slice.
// In your slice, the state looks like:
// {
//   value: 0
// }
//and state.value === 0

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrememt: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrememtByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export { counterSlice };
export const { incrememt, decrement, reset, incrememtByValue } = counterSlice.actions
export default counterSlice.reducer

//It will Create Object Like 
// {
//   name: "counter",

//   reducer: function reducer(state = { value: 0 }, action) {
//     const caseReducer = slice.caseReducers[action.type.replace("counter/", "")];
//     if (caseReducer) {
//       return caseReducer(state, action) || state;
//     }
//     return state;
//   },

//   actions: {
//     incrememt: function incrememt() {
//       return { type: "counter/incrememt" };
//     },
//     reset: function reset() {
//       return { type: "counter/reset" };
//     },
//     decrement: function decrement() {
//       return { type: "counter/decrement" };
//     },
//     incrememtByValue: function incrememtByValue(payload) {
//       return {
//         type: "counter/incrememtByValue",
//         payload
//       };
//     }
//   },

//   caseReducers: {
//     incrememt: function (state, action) {
//       state.value += 1;
//     },
//     reset: function (state, action) {
//       state.value = 0;
//     },
//     decrement: function (state, action) {
//       state.value -= 1;
//     },
//     incrememtByValue: function (state, action) {
//       state.value += action.payload;
//     }
//   },

//   getInitialState: function () {
//     return { value: 0 };
//   }
// }

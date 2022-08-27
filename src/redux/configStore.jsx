import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";
export const store = configureStore({
  reducer: {
    number: numberReducer,
  },
});
// (state = 1, action) => {
//     switch (action.type) {
//       case "CHANGE_NUMBER": {
//         state = action.payload;
//       }
//       default: {
//         return state;
//       }
//     }
//   },

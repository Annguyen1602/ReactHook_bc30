import { configureStore } from "@reduxjs/toolkit";
import facebookReducer from "./reducers/facebookReducer";
import numberReducer from "./reducers/numberReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer,
    productReducer,
    userReducer,
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

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tools";
import { history } from "../../index";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN) || {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getProfileAction } = userReducer.actions;

export default userReducer.reducer;

// phần thunk - khi gưi dispatch thunk
export const loginApi = (userLogin) => {
  //{email,password}

  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });

      // khi đăng nhập thành công thì lưu trữ dữ liệu vào store
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      // Chuyển hướng về profile
      history.push("/profile");
      //sau khi đăng nhập thành công thì dispatch action getProfile

      dispatch(getProfileApi());
    } catch (error) {
      history.push("/home");
      console.log(error);
    }
  };
};

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          // dữ liệu mặc định gửi đi, backend quy định
          Authorization: "Bearer " + accessToken,
        },
      });
      //lấy được thông tin profile đưa lên redux
      const action = getProfileAction(result.data.content);
      dispatch(action);

      // Lưu vào storage
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (error) {
      console.log(error);
    }
  };
};

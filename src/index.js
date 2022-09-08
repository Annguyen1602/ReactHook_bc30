import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/HookDemo/UstateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HookDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HookDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HookDemo/DemoUseMemo/UseMemoDemo";
import UseRefDemo from "./pages/HookDemo/UseRefDemo/UseRefDemo";

import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber";
import DemoFaceBookApp from "./pages/HookDemo/UseReduxDemo/DemoFaceBookApp/DemoFaceBookApp";
import LoginDemo from "./pages/HookDemo/UseHookRouter/LoginDemo/LoginDemo";
import Home from "./pages/HookDemo/UseHookRouter/DemoUseParams/Home";
import Detail from "./pages/HookDemo/UseHookRouter/DemoUseParams/Detail";
import DemoUseSearchParams from "./pages/HookDemo/UseHookRouter/DemoUseSearchParams/DemoUseSearchParams";
import DemoUseRoute from "./pages/HookDemo/CustomHook/DemoUseRoute";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import AntdDemo from "./pages/AntdDemo/AntdDemo";
import './assets/scss/style.scss'
import Login from "./pages/Login/Login";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import Profile from "./pages/Profile/Profile";


// cấu hình history chuyển hướng không cần hook navigate
export const history = createBrowserHistory({window})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="search" element={<DemoUseSearchParams />}></Route>

          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="demouseroute" element={<DemoUseRoute />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememodemo" element={<UseMemoDemo />}></Route>
          <Route path="userefdemo" element={<UseRefDemo />}></Route>
          <Route path="useredux" element={<DemoNumber />}></Route>
          <Route path="reduxfacebookapp" element={<DemoFaceBookApp />}></Route>
          <Route path="logindemo" element={<LoginDemo />}></Route>
          <Route path="antd" element={<AntdDemo />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>


        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UseStateDemo from './pages/HookDemo/UstateDemo/UseStateDemo';
import UseEffectDemo from './pages/HookDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HookDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HookDemo/DemoUseMemo/UseMemoDemo';
import UseRefDemo from './pages/HookDemo/UseRefDemo/UseRefDemo';

import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import DemoNumber from './pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber';
import DemoFaceBookApp from './pages/HookDemo/UseReduxDemo/DemoFaceBookApp/DemoFaceBookApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <BrowserRouter>
   <Routes>
      <Route path='' element={<App/>}>
         <Route path='usestate' element={<UseStateDemo/>}></Route>
         <Route path='useeffect' element={<UseEffectDemo/>}></Route>
         <Route path='usecallback' element={<UseCallBackDemo/>}></Route>
         <Route path='usememodemo' element={<UseMemoDemo/>}></Route>
         <Route path='userefdemo' element={<UseRefDemo/>}></Route>
         <Route path='useredux' element={<DemoNumber/>}></Route>
         <Route path='reduxfacebookapp' element={<DemoFaceBookApp/>}></Route>

      </Route>
   </Routes>
   </BrowserRouter>
   </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

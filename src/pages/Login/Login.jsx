import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux"
import { loginApi } from "../../redux/reducers/userReducer";
export default function Login() {
  const dispatch = useDispatch()
  // console.log(frm.values);
  //lấy dữ liệu từ form
  const frm = useFormik({
    initialValues: {
      // dữ liệu ban đầu của form
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Password không được bỏ trống")
        .min(1, "pass phải từ 6-32 ký tự")
        .max(32, "pass từ 6-32 ký tự"),

      //.matches(/cybersoft/,'password không đúng định dạng')
    }),
    onSubmit: (values) => {
      
      // console.log(values);
      // const action = loginApi(values);
      dispatch(loginApi(values))

    },
  });

  return (
    <form className="container" onSubmit={frm.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          className="form-control"
          id="email"
          name="email"
          onInput={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.email ? (
          <span className="text-danger">{frm.errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          id="password"
          name="password"
          onInput={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.password ? (
          <span className="text-danger">{frm.errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}

import React, { useRef, useState } from "react";

/*
useState lấy giá trị input => khi có tính năng chỉnh sửa load lại form trên cùng giao diện
useRef sử dụng đối với form không bao gồm chỉnh sửa load lại
useRef: lưu lại giá trị sau các lần render
 */

export default function UseRefDemo() {
  //   const [userLogin, setUserLogin] = useState({
  //     username: "",
  //     password: "",
  //   });
  const [number, setNumber] = useState(1);
  const userLoginRef = useRef({
    username: "",
    password: "",
  });
//   console.log(userLogin);
  const handleChange = (e) => {
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
    // setUserLogin({
    //   ...userLogin,
    //   [id]: value,
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLoginRef.current);
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Username</p>
        <input className="form-control" id="username" onInput={handleChange} />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          id="password"
          type="password"
          onInput={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

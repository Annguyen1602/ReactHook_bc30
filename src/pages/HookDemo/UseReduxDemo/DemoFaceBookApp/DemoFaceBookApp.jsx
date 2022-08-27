import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../../redux/reducers/facebookReducer";

export default function DemoFaceBookApp() {
  const { arrComment } = useSelector((state) => state.facebookReducer);
  const userComment = useRef({ name: "", content: "" });
  console.log(arrComment);

  const dispatch = useDispatch()
  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div class="row mt-2" key={index}>
          <div className="col-2">
            <img
              src={`https://i.pravatar.cc?u=${comment.name}`}
              alt="..."
              className="w-100"
            />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    userComment.current[id] = value;
    console.log(userComment.current);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    //đưa dữ liệu lên redux;

    //dùng action creator
    const action = addComment(userComment.current)
    //const action ={
    //     type:"facebookReducer/addComment",
    //     payload"{name:'',content:''}
    // }
    dispatch(action)



  }
  return (
    <div className="container">
      <h3>Demo Facebook App</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <form className="frm" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>name</p>
              <input
                className="form-control"
                id="name"
                onInput={handleChangeInput}
              />
            </div>
            <div className="form-group">
              <p>content</p>
              <input
                className="form-control"
                id="content"
                onInput={handleChangeInput}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

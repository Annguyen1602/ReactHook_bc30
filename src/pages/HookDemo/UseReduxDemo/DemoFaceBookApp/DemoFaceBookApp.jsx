import React from "react";

export default function DemoFaceBookApp() {
  return (
    <div className="container">
      <h3>Demo Facebook App</h3>
      <div className="card">
        <div className="card-header">
          <div class="row">
            <div className="col-2">
              <img
                src="https://i.pravatar.cc?u=1"
                alt="..."
                className="w-100"
              />
            </div>
            <div className="col-10">
              <h3 className="text-danger">Hậu mentor</h3>
              <p>A hi hí</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form className="frm">
            <div className="form-group">
              <p>name</p>
              <input className="form-control" id="name" />
            </div>
            <div className="form-group">
              <p>content</p>
              <input className="form-control" id="content" />
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

import React from "react";
import { memo } from "react";

function Comment(props) {
  console.log("comment");
  return (
    <div className="mt-2">
      {props.renderLike()}
      <br/>
      <textarea></textarea> <br />
      <button>Gửi</button>
    </div>
  );
}

export default memo(Comment);

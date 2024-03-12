import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "첫번째 댓글입니다.",
    },

    {
        name: "김태형",
        comment: "두번째 댓글입니다.",
    },

    {
        name: "페이커",
        comment: "세번째 댓글입니다."
    }
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;

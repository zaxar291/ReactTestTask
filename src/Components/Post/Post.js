import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";
import CommentForm from "../Comments/PostComment";

const Post = ({ id, title, body }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{body}</p>
                {isLoggedIn && <CommentForm postId={id}/>}
            </div>
        </div>
    )
}
Post.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
}

export default Post

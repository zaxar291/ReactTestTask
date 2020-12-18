import React from 'react'
import { useDispatch } from "react-redux";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { reduxForm } from "redux-form";
import { addComment } from "../../Redux/Actions/PostsActions/BaseActions";

const PostComment = (props) => {
    const dispatch = useDispatch()
    const { handleSubmit } = props
    const SubmitForm = (values) => {
        values.postId = props.postId
        dispatch(addComment(values))
    }
    return (
        <div className="accordion">
            <form onSubmit={handleSubmit(SubmitForm)}>
                <Input type="text" label="Your email" name="email"/>
                <Input type="text" label="Your name" name="name" />
                <Input type="text" label="Your comment" name="body" />
                <Button type="submit" text="Send comment" />
            </form>
        </div>
    )
}

const CommentForm = reduxForm({
    form: 'comment'
})(PostComment)

export default CommentForm

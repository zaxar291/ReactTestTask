import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Comment from '../../Components/Comments/Comment'
import { loadComments } from "../../Redux/Actions/PostsActions/BaseActions";
import Loader from "../../Components/Loader/Loader";

const Comments = () => {
    const dispatch = useDispatch()
    const commentsList = useSelector(state => state.posts.commentsList)
    const loading = useSelector(state => state.loader.loading)
    useEffect(() => {
        if (!commentsList.length) {
            dispatch(loadComments())
        }
    }, [])
    if (loading || !commentsList.length) {
        return (
            <Loader />
        )
    }

    return commentsList.map(comment => <Comment name={comment.name} email={comment.email} body={comment.body} key={comment.id}/>)
}

export default Comments

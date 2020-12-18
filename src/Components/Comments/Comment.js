import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ name, email, body }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name} {email} </h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}

Comment.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string
}

export default Comment

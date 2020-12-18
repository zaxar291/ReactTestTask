import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const Message = ({ message, messageType }) => {
    Swal.fire({
        icon: messageType,
        text: message
    })
    return ''
}

Message.propTypes = {
    message: PropTypes.string,
    messageType: PropTypes.string
}

export default Message

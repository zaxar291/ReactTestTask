import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/Actions/UserActions/UserActions';

const LogoutPage = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser());
};

export default LogoutPage;


import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function useNotAuthenticated() {
  const history = useHistory();
  const token = useSelector((state) => state.USER.token);

  if (token) {
    history.push('/');
  }
}


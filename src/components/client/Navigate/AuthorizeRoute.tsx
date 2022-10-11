import { Navigate } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';

export function AuthorizeRoute() {
  const { value } = useLocalStorage('loginState', {
    isLogin: false,
    loginToken: '',
  });
  const { isLogin } = value;

  return isLogin ? <Navigate to="/Main" /> : <Navigate to="/login" />;
}

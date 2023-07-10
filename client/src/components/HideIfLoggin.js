import { useSelector } from 'react-redux';

export default function HideIfLogged({ children }) {
  const user = useSelector((state) => state.user);
  console.log(user)

  if (user.token) {
    return <></>;
  }
  return children;
}

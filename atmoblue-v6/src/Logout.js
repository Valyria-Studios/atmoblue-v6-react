import { getAuth, signOut } from "firebase/auth";

export default function Logout({ setIsAuthenticated }) {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setIsAuthenticated(false);
    })
  };

  return (
    <button style={{ marginLeft: '12px' }} onClick={handleLogout}>Logout</button>
  )
};
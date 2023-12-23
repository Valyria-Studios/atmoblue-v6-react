import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    if (document.activeElement.name === 'Login') {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error.message)
      }
    } else if (document.activeElement.name === 'Register') {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error.message)
      }
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="admin@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" placeholder="xyz" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="submit" value="Login" name="Login" />
        <input type="submit" value="Register" name="Register" />
      </form>
    </div>
  )
};
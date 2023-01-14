import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, Login, Logout } from "./store/Actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const handleLogin = () => {
    isLogged ? dispatch(Logout()) : dispatch(Login());
  };

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h1>Counter: {counter}</h1>
      <h1>{isLogged ? "Logout" : "Login"}</h1>
      <button onClick={handleLogin}>{isLogged ? "logout" : "login"}</button>
    </div>
  );
}

export default App;

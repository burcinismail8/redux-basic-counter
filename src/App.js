import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
export default function App() {
  const counter = useSelector((state) => state.counterReducer);
  // const logged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        className="btn-lg btn-primary"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="btn-lg btn-danger"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
}

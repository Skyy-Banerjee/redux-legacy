import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle_counter" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increase", payload: 5 })}>
          Increase By 5
        </button>
        <button onClick={() => dispatch({ type: "decrease", payload: 3 })}>
          Decrease By 3
        </button>
        <button onClick={() => dispatch({ type: "increase", payload: 10 })}>
          Increase By 10
        </button>
        <button onClick={() => dispatch({ type: "decrease", payload: 15 })}>
          Decrease By 15
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {show ? "Hide-Counter🕶️" : "Show-Counter🔍"}
      </button>
    </main>
  );
};

export default Counter;

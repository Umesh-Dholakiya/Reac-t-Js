import { useDispatch, useSelector } from "react-redux"
import { Decrements, Increments, Reset } from "./Action/CounterAction";


function App() {

  const no = useSelector(state => state.cnt);
  const dispatch = useDispatch();

  return (

    <div align="center">

      <h1>Counter App</h1>
      <h2>Count : {no}</h2>

      <button onClick={() => dispatch(Increments())}>+</button>

      {
        no === 0 ? (
          <>
            <button disabled  onClick={() => dispatch(Decrements())}>-</button>
            <button disabled onClick={() => dispatch(Reset())}>Reset</button>
          </>
        )
          : (
            <>
              <button onClick={() => dispatch(Decrements())}>-</button>
              <button onClick={() => dispatch(Reset())}>Reset</button>
            </>
          )
      }

    </div>
  )
}

export default App

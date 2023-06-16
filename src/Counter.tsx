import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { down, init, up } from './store/counterSlice';

export default function Counter() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const addNumber = () => {
    dispatch(up(2));
  };

  const minusNumber = () => {
    dispatch(down(2));
  };

  const initNumber = () => {
    dispatch(init());
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={addNumber}>+</button>
      <button onClick={minusNumber}>-</button>
      <button onClick={initNumber}>초기화</button>
    </div>
  );
}

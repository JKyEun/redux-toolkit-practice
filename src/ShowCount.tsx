import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function ShowCount() {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>{count}</div>;
}

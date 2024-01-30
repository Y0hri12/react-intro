import React, { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
  // カウントの合計値countを初期化
  const [count, setCount] = useState(0);
  // State値（count）を更新する関数updateを定義
  const update = (step: number) => setCount((c) => c + step);
  return (
    <>
      {/* update関数をStateCounterコンポーネントに引き渡す */}
      <p>総カウント: {count}</p>
      <StateCounter step={1} onUpdate={update} />
      <StateCounter step={5} onUpdate={update} />
      <StateCounter step={-1} onUpdate={update} />
    </>
  );
}

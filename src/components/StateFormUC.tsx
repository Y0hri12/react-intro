import { useRef } from 'react';

export default function StateFormUC() {
  // React要素への参照を準備
  const name = useRef<HTMLInputElement>(null);
  const sex = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  // 要素（参照）経由で入力値を準備
  const show = () => {
    console.log(
      `Hello ${name.current?.value}(${sex.current?.value}, ${age.current?.value} years old)!`
    );
  };
  // フォームを描画
  return (
    <form>
      <div>
        <label htmlFor="name">name: </label>
        <input
          id="name"
          name="name"
          type="text"
          ref={name}
          defaultValue="fps_shaka"
        />
      </div>
      <div>
        <label htmlFor="sex">sex: </label>
        <input id="sex" name="sex" type="text" ref={sex} defaultValue="male" />
      </div>
      <div>
        <label htmlFor="age">age: </label>
        <input id="age" name="age" type="number" ref={age} defaultValue="32" />
      </div>
      <div>
        <button type="button" onClick={show}>
          submit
        </button>
      </div>
    </form>
  );
}

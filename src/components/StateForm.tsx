import React, { useState } from 'react';

export default function StateForm() {
  // フォームとして扱う値をstateとして定義
  const [form, setForm] = useState({
    name: 'fps_shaka',
    sex: 'male',
    age: 32,
  });
  // フォーム要素の変更をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // 送信ボタンクリック時にログにメッセージを出力
  const show = () => {
    console.log(`Hello,${form.name}(${form.sex}, ${form.age} years old)`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleForm}
        />
      </div>
      <div>
        <label htmlFor="sex">sex: </label>
        <input
          id="sex"
          name="sex"
          type="text"
          value={form.sex}
          onChange={handleForm}
        ></input>
      </div>
      <div>
        <label htmlFor="age">age: </label>
        <input
          id="age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleForm}
        ></input>
      </div>
      <div>
        <button type="button" onClick={show}>
          submit
        </button>
      </div>
      <p>
        Hello,{form.name}({form.age} years old)!
      </p>
    </form>
  );
}

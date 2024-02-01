import { useState } from 'react';

export default function FormSelect() {
  // Stateを初期化
  const [form, setForm] = useState({ animal: 'dog' });

  // 洗濯ボックスの変更時に入力値をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 送信ボタンクリック時にログにメッセージを出力
  const show = () => {
    console.log(`animal: ${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">animal: </label>
      <select
        id="animal"
        name="animal"
        value={form.animal}
        onChange={handleForm}
      >
        <option value="dog">dog</option>
        <option value="cat">cat</option>
        <option value="rabbit">rabbit</option>
        <option value="hamster">hamster</option>
      </select>
      <br />
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

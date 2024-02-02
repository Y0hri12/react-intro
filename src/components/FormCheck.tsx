import { useState } from 'react';

export default function FormCheck() {
  // Stateを初期化
  const [form, setForm] = useState({ agreement: true });

  // チェックボックスの変更時に入力値をStateに反映
  const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  // 送信ボタンクリック時に入力値をログに出力
  const show = () => {
    console.log(`agreement: ${form.agreement ? 'for' : 'against'}`);
  };

  return (
    <form>
      <label htmlFor="agreement">agreement: </label>
      <input
        id="agreement"
        name="agreement"
        type="checkbox"
        checked={form.agreement}
        onChange={handleFormCheck}
      />
      <br />
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

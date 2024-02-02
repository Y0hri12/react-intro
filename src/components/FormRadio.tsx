import { useState } from 'react';

export default function FormRadio() {
  // Stateを初期化
  const [form, setForm] = useState({ Payment: 'credit' });

  // ラジオボタンの変更時に入力値をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 送信ボタンクリック時に入力値をログに出力
  const show = () => {
    console.log(`Payment: ${form.Payment}`);
  };

  // Stateの現在値に応じて、checked属性の値を設定
  return (
    <form>
      <fieldset>
        <legend>Payment: </legend>
        <label htmlFor="credit">credit</label>
        <input
          id="credit"
          name="Payment"
          type="radio"
          value="credit"
          checked={form.Payment === 'credit'}
          onChange={handleForm}
        />
        <br />
        <label htmlFor="cash">cash</label>
        <input
          id="cash"
          name="Payment"
          type="radio"
          value="cash"
          checked={form.Payment === 'cash'}
          onChange={handleForm}
        />
        <br />
        <label htmlFor="bank">bank</label>
        <input
          id="bank"
          name="Payment"
          type="radio"
          value="bank"
          checked={form.Payment === 'bank'}
          onChange={handleForm}
        />
      </fieldset>
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

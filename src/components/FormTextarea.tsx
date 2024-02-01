import { useState } from 'react';

export default function FormTextarea() {
  // Stateを初期化
  const [form, setForm] = useState({
    comment: '',
  });

  // テキストエリアの変更時に入力層をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 送信ボタンクリック時にログにメッセージを出力
  const show = () => {
    console.log(`comment: ${form.comment}`);
  };

  return (
    <form>
      <label htmlFor="comment">comment: </label>
      <br />
      <textarea
        id="comment"
        name="comment"
        cols={30}
        rows={5}
        value={form.comment}
        onChange={handleForm}
      />
      <br />
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

import { useState } from 'react';

export default function FormList() {
  // Stateを初期化
  const [form, setForm] = useState({ sport: ['baseball', 'football'] });

  // リストボックスの変更時に入力値をStateに反映
  const handleFormList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // 選択値を格納するための配列
    const data: string[] = [];
    // <option>要素を順に走査し、選択状態にある値を配列に格納
    const opts: HTMLOptionElement[] = Array.from(e.target.options);
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    // 最終的な結果をStateに反映
    setForm({ ...form, [e.target.name]: data });
  };

  // 送信ボタンクリック時にログにメッセージを出力
  const show = () => {
    console.log(`sport: ${form.sport}`);
  };

  return (
    <form>
      <label htmlFor="sport">sport</label>
      <br />
      <select
        id="sport"
        name="sport"
        value={form.sport}
        size={4}
        multiple={true}
        onChange={handleFormList}
      >
        <option value="baseball">baseball</option>
        <option value="tennis">tennis</option>
        <option value="basketball">basketball</option>
        <option value="football">football</option>
      </select>
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

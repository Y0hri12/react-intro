import { useState } from 'react';

export default function FormCheckMulti() {
  // Stateを初期化
  const [form, setForm] = useState({ sport: ['baseball', 'football'] });

  // チェックボックスの変更時に入力値をStateに反映
  const handleFormMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fs: string[] = form.sport;
    // チェック時は配列に追加、非チェック時は配列から削除
    if (e.target.checked) {
      fs.push(e.target.value);
    } else {
      fs.splice(fs.indexOf(e.target.value), 1);
    }
    // 編集済みの配列をStateに反映
    setForm({ ...form, [e.target.name]: fs });
  };

  // 送信ボタンクリック時に入力値をログに出力
  const show = () => {
    console.log(`sport: ${form.sport}`);
  };

  // チェックの有無を個々のチェックボックスに反映
  return (
    <form>
      <fieldset>
        <legend>sport: </legend>
        <label htmlFor="baseball">baseball</label>
        <input
          id="baseball"
          name="sport"
          type="checkbox"
          value="baseball"
          checked={form.sport.includes('baseball')}
          onChange={handleFormMulti}
        />
        <br />
        <label htmlFor="tennis">tennis</label>
        <input
          id="tennis"
          name="sport"
          type="checkbox"
          value="tennis"
          checked={form.sport.includes('tennis')}
          onChange={handleFormMulti}
        />
        <br />
        <label htmlFor="basketball">basketball</label>
        <input
          id="basketball"
          name="sport"
          type="checkbox"
          value="basketball"
          checked={form.sport.includes('basketball')}
          onChange={handleFormMulti}
        />
        <br />
        <label htmlFor="football">football</label>
        <input
          id="football"
          name="sport"
          type="checkbox"
          value="football"
          checked={form.sport.includes('football')}
          onChange={handleFormMulti}
        />
        <br />
      </fieldset>
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

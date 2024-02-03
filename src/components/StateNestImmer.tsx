import { useImmer } from 'use-immer';

type Form = {
  name: string;
  address: {
    prefecture: string;
    city: string;
  };
};

export default function StateNestImmer() {
  // フォームとしてのStateを宣言
  const [form, setForm] = useImmer<Form>({
    name: 'fps_shaka',
    address: {
      prefecture: 'Tokyo',
      city: 'Shibuya',
    },
  });

  // 1段目の入力値をStateに反映
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as 'name';
    setForm((form) => {
      form[name] = e.target.value;
    });
  };

  // 2段目の入力値をStateに反映
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as 'prefecture' | 'city';
    setForm((form) => {
      form.address[name] = e.target.value;
    });
  };

  // 送信ボタンクリック時にログにメッセージを出力
  const show = () => {
    console.log(`name: ${form.name}`);
    console.log(`address: ${form.address.prefecture}・${form.address.city}`);
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
        <label htmlFor="prefecture">prefecture: </label>
        <input
          id="prefecture"
          name="prefecture"
          type="text"
          value={form.address.prefecture}
          onChange={handleAddress}
        />
      </div>
      <div>
        <label htmlFor="city">city: </label>
        <input
          id="city"
          name="city"
          type="text"
          value={form.address.city}
          onChange={handleAddress}
        />
      </div>
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

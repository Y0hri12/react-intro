import { useImmer } from 'use-immer';

type Form = {
  name: string;
  address: {
    prefecture: string;
    city: string;
  };
};

export default function StateNestImmer2() {
  // フォームとしてのStateを宣言
  const [form, setForm] = useImmer<Form>({
    name: 'fps_shaka',
    address: {
      prefecture: 'Tokyo',
      city: 'Shibuya',
    },
  });

  // 1段目の入力値をStateに反映
  const handleNest = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 要素名を分解
    const ns = e.target.name.split('.');
    setForm((form) => {
      // 階層に応じて代入先を切り替え
      if (ns.length === 1) {
        const name = ns[0] as 'name';
        form[name] = e.target.value;
      } else {
        const address = ns[0] as 'address';
        const address_info = ns[1] as 'prefecture' | 'city';
        form[address][address_info] = e.target.value;
      }
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
          onChange={handleNest}
        />
      </div>
      <div>
        <label htmlFor="prefecture">prefecture: </label>
        <input
          id="prefecture"
          name="address.prefecture"
          type="text"
          value={form.address.prefecture}
          onChange={handleNest}
        />
      </div>
      <div>
        <label htmlFor="city">city: </label>
        <input
          id="city"
          name="address.city"
          type="text"
          value={form.address.city}
          onChange={handleNest}
        />
      </div>
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

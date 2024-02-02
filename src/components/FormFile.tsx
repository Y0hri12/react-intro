import { useRef } from 'react';

export default function FormFile() {
  // ファイル入力ボックスへの参照
  const file = useRef<HTMLInputElement>(null);

  // 送信ボタンクリック時にファイル情報をログに出
  function show() {
    if (file.current && file.current.files) {
      const fs: File[] = Array.from(file.current.files);
      // 取得したファイル群を順に走査
      for (const f of fs) {
        console.log(`file: ${f.name}`);
        console.log(`type: ${f.type}`);
        console.log(`size: ${Math.trunc(f.size / 1024)}KB`);
      }
    }
  }

  return (
    <form>
      <input id="file" type="file" ref={file} multiple />
      <button type="button" onClick={show}>
        submit
      </button>
    </form>
  );
}

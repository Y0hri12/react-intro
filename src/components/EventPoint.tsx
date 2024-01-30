import React, { useState } from 'react';
import './EventPoint.css';

export default function EventPoint() {
  const [screen, setScreen] = useState({ x: 0, y: 0 });
  const [page, setPage] = useState({ x: 0, y: 0 });
  const [client, setClient] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // クリック時にイベントオブジェクトをログに出力
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log(e);

  // ポインターの位置をそれぞれの基準を基づいて表示
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setScreen({ x: e.screenX, y: e.screenY });
    setPage({ x: e.pageX, y: e.pageY });
    setClient({ x: e.clientX, y: e.clientY });
    setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <div id="main" onMouseMove={handleMouseMove}>
        screen: {screen.x}/{screen.y}
        <br />
        page: {page.x}/{page.y}
        <br />
        client: {client.x}/{client.y}
        <br />
        offset: {offset.x}/{offset.y}
        <br />
      </div>
    </>
  );
}

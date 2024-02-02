import React from 'react';

type Book = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
};

type Props = {
  src: Book[];
  children: (elem: Book) => React.ReactNode;
};

export default function ListTemplate({ src, children }: Props) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>{children(elem)}</React.Fragment>
      ))}
    </dl>
  );
}

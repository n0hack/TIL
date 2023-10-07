import { produce } from 'immer';
import React, { useRef, useState } from 'react';

type ImmerProps = {};

type Info = {
  id: number;
  name: string;
  username: string;
};

type Data = {
  array: Info[];
  uselessValue: null;
};

const Immer = ({}: ImmerProps) => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState<Data>({
    array: [],
    uselessValue: null,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name as keyof typeof form] = value;
      })
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const info: Info = {
      id: nextId.current,
      name: form.name,
      username: form.username,
    };

    setData(
      produce((draft) => {
        draft.array.push(info);
      })
    );
    setForm({ name: '', username: '' });
    nextId.current += 1;
  };

  const onRemove = (id: number) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Immer;

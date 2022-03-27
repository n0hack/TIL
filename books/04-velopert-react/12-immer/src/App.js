import { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import { useImmer } from './useImmer';

export default function App() {
  const nextId = useRef(1);
  const [form, setForm] = useImmer({ name: '', username: '' });
  const [data, setData] = useImmer({ array: [], uselessValue: null });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm((draft) => {
        draft[name] = value;
      });
      // setForm((prevForm) => ({ ...prevForm, [name]: value }));
    },
    [setForm]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData((draft) => {
        draft.array.push(info);
      });

      setForm((draft) => {
        draft.name = '';
        draft.username = '';
      });
      nextId.current += 1;
    },
    [form, setData, setForm]
  );

  const onRemove = useCallback(
    (id) => {
      // setData({ ...data, array: data.array.filter((info) => info.id !== id) });
      setData((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      });
    },
    [setData]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
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
}

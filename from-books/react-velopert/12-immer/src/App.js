import { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import { useImmer } from './useImmer';
import './App.css';

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useImmer({ name: '', username: '' });
  // const [form, setForm] = useState({ name: '', username: '' });
  // const [data, setData] = useState({ array: [], uselessValue: null });
  const [data, setData] = useImmer({ array: [], uselessValue: null });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((draft) => {
      draft[name] = value;
    });
    // setForm((form) =>
    //   produce(form, (draft) => {
    //     draft[e.target.name] = e.target.value;
    //   })
    // );
    // const { name, value } = e.target;
    // setForm({ ...form, [name]: value });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const info = {
        id: nextId.current,
        ...form,
      };
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );
      // setData(
      //   produce(data, (draft) => {
      //     draft.array.push(info);
      //   })
      // );
      // setData({ ...data, array: data.array.concat(info) });
      setForm((draft) => {
        draft.name = '';
        draft.username = '';
      });
      nextId.current += 1;
    },
    [form]
  );

  const handleRemove = useCallback((id) => {
    setData((draft) => {
      draft.array.splice(
        draft.array.findIndex((info) => info.id === id),
        1
      );
    });
    // setData(
    //   produce(data, (draft) => {
    //     draft.array.splice(
    //       draft.array.findIndex((info) => info.id === id),
    //       1
    //     );
    //   })
    // );
    // setData({ ...data, array: data.array.filter((info) => info.id !== id) });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => handleRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

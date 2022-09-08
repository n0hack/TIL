import React, { useCallback, useRef, useState } from "react";
import produce, { Draft } from "immer";

interface Props {}

interface IForm {
  name: string;
  username: string;
  [key: string]: string;
}

interface IData {
  array: ArrayType[];
  uselessValue: null;
}

type ArrayType = IForm & { id: string };

const Immer = ({}: Props) => {
  const nextId = useRef(1);
  const [form, setForm] = useState<IForm>({ name: "", username: "" });
  const [data, setData] = useState<IData>({ array: [], uselessValue: null });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const info = {
        id: nextId.current + "",
        name: form.name,
        username: form.username,
      };

      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );
      setForm({ name: "", username: "" });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id: string) => {
    setData(
      produce((draft) => {
        const index = draft.array.findIndex((info) => info.id === id);
        draft.array.splice(index, 1);
      })
    );
  }, []);

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

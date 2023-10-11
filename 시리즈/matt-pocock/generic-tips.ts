// NOTE
// 우리가 타입스크립트보다 잘 알고 있는 경우, as를 통해 단언해도 됨

namespace One {
  type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

  type Result = GetPromiseReturnType<() => Promise<{ firstName: string; lastName: string; id: string }>>;
}

namespace Two {
  const getKeyWithHightestValue = <TObj extends Record<string, number>>(
    obj: TObj,
  ): { key: keyof TObj; value: number } => {
    const keys = Object.keys(obj) as Array<keyof TObj>;

    let highestKey: keyof TObj = keys[0];
    let highestValue = obj[highestKey];

    for (const key of keys) {
      if (obj[key] > highestValue) {
        highestKey = key;
        highestValue = obj[key];
      }
    }

    return {
      key: highestKey,
      value: highestValue,
    };
  };

  const result = getKeyWithHightestValue({
    a: 1,
    b: 2,
    c: 3,
  });

  const key = result.key;

  const value = result.value;
}

namespace Three {
  const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey): TObj[TKey] => {
    if (key === 'bad') {
      throw new Error("Don't access the bad key");
    }
    return obj[key];
  };

  const result = getValue({ a: 1, b: 'some-string', c: true }, 'b');
}

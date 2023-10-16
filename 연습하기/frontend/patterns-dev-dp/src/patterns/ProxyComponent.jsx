// NOTE Proxy
// 1. 유효성 검사를 구현할 때 유용함
// 2. 객체의 동작을 커스터마이징할 수 있는 유용한 기능
const person = {
  name: 'Lucid',
  age: 29,
  nationality: 'Korean',
};

const personProxy = new Proxy(person, {
  get: (obj, p) => {
    return Reflect.get(obj, p);
  },
  set: (obj, p, value) => {
    return Reflect.set(obj, p, value);
  },
});

const ProxyComponent = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(personProxy.age);
        }}
      >
        Get 버튼
      </button>
      <button
        onClick={() => {
          console.log((personProxy.age = 30));
        }}
      >
        Set 버튼
      </button>
    </div>
  );
};

export default ProxyComponent;

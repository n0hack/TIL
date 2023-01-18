const deepcopy = (obj) => {
  return Object.keys(obj).reduce(
    (res, key) => {
      if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
        res[key] = deepcopy(obj[key]);
      } else {
        res[key] = obj[key];
      }

      return res;
    },
    Array.isArray(obj) ? [] : {},
  );
};

const obj1 = {
  name: "Ming",
  age: 29,
  address: { city: "서울", country: "한국" },
  project: ["프로젝트 1", "프로젝트 2"],
  test: [{ name: "테스트 1" }, { name: "테스트 2" }],
};

console.log(deepcopy(obj1));
const obj2 = deepcopy(obj1);

console.log(obj1);
console.log(obj1 === obj2);
console.log(obj1.address === obj2.address);

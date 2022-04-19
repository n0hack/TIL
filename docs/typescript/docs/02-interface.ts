interface Window2 {
  title: string;
}

interface Window2 {
  num: number;
  tu: [number];
  arr: number[];
}

function fn(obj: Window2) {
  console.log(obj);
}

fn({ title: 'hi', num: 123, tu: [1], arr: [1, 2, 3] });

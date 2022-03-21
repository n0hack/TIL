function asyncFunc(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(time), time);
  });
}

async function sum() {
  const sum = await Promise.all([asyncFunc(2500), asyncFunc(1500)]);
  console.log(sum);
}
sum();

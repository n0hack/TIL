function* infiniteEnergyGenerator() {
  let energy = 1;
  while (true) {
    const booster = yield energy;

    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
  }
}

const energyGenerator = infiniteEnergyGenerator();

// 제너레이터는 지연 평가를 진행한다.
for (let i = 0; i < 5; i++) {
  console.log(energyGenerator.next());
}

console.log(energyGenerator.next(10));

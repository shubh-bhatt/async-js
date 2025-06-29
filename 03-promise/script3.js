function orderFood() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      let chance = Math.random();
      if (chance < 0.7) res();
      else rej();
    }, 2000);
  });
}

orderFood()
  .then(function () {
    console.log("Pizza Delivered!");
  })
  .catch(function () {
    console.log("Delivery failed!");
  });

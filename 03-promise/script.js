let pr = new Promise(function (res, rej) {
  console.log("data fetched");
  res();
});

pr.then(function () {
  console.log("resolved");
}).catch(function () {
  console.log("rejected");
});

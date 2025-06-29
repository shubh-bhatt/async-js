function fakeApiCall(endpoint) {
  const data = {
    users: ["Shubham", "Raghav", "Harsh"],
    posts: ["Software Engineer", "Data Scientist", "Professor"],
  };

  return new Promise((res, rej) => {
    let randomDelay = Math.random() * 2000 + 1000;

    setTimeout(() => {
      res(data[endpoint]);
    }, randomDelay);
  });
}

fakeApiCall("users").then(function (data) {
  console.log(data);
});

fakeApiCall("posts").then(function (data) {
  console.log(data);
});

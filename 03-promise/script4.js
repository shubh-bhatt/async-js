function getUser() {
  return new Promise((res, rej) => {
    res({ id: 1, name: "Shubham" });
  });
}

function getPosts(userId) {
  return new Promise((res, rej) => {
    res(["Army Officer", "Software Engineer"]);
  });
}

function getComments(postId) {
  return new Promise((res, rej) => {
    res(["Looking nice!", "Beautiful"]);
  });
}

// Promise chaining
getUser()
  .then(function (data) {
    console.log(data);
    return getPosts(data.id);
  })
  .then(function (titles) {
    console.log(titles);
    return getComments(titles);
  })
  .then(function (cmts) {
    console.log(cmts);
  })
  .finally(function () {
    console.log("All data fetched");
  });

function getDetails(username, callback) {
  setTimeout(function () {
    console.log("Sending details to instagram");
  }, 1000);

  setTimeout(() => {
    console.log("fetching details");
  }, 2000);

  setTimeout(() => {
    callback();
  }, 3000);
}

getDetails("shubhambhatt", function () {
  console.log("photo saved in gallery");
});

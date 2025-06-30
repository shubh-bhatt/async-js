let button = document.querySelector("button");

button.addEventListener("click", function () {
  fetch("https://api.github.com/users/shubh-bhatt")
    .then((res) => res.json()) // converting to json
    .then((data) => {
      console.log(data);
    });
});

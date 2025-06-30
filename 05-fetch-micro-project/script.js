let form = document.querySelector("#myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const box = document.getElementById("box");
      box.innerHTML = `<p>Username: ${data.login || "Not Found"}</p>
      <p>Name: ${data.name || "Not Found"}</p>
      <p>Twitter Username: ${data.twitter_username || "Not Found"}</p>
      <p>Followers: ${data.followers || "Not Found"}</p>
      <p>Following: ${data.following || "Not Found"}</p>
      <p>Public Repos: ${data.public_repos || "Not Found"}</p>`;
    })
    .catch((error) => {
      console.log("Failed to fetch the data: ", error);
    });
});

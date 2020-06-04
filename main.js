document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getUsers").addEventListener("click", getUser);
document.querySelector("#getPost").addEventListener("click", getPost);
document.querySelector("#addPost").addEventListener("submit", addPost);

function getText() {
  // fetch("sample.txt")
  //   .then(function (res) {
  //     return res.text();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      document.querySelector("#output").innerHTML = data;
    })
    .catch((error) => console.log(error));
}
function getUser() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "<h2 class='mb-4'>Users</h2>";

      data.forEach((user) => {
        output += `
              <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
              </ul> `;
      });
      document.querySelector("#outPutUser").innerHTML = output;
    });
}
function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Posts</h2>';

      data.forEach((posts) => {
        output += `
              <div class="card card-body mb-3">
                  <h3>${posts.id} : ${posts.title}</h3>

                  <p>${posts.body}</p>
              </div>
             `;
      });
      document.querySelector("#output").innerHTML = output;
    });
}
function addPost(e) {
  e.preventDefault();

  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, " / "",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function onRegisterButtonClick() {
  const login = document.getElementById("user_login").value;
  const password = document.getElementById("user_password").value;


  const url = "http://localhost:8000/users/new/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  })
    .then((response) => response.text())
    .then((text) => JSON.parse(text))
    .then((json) => json.user_id)
    .then((user_id) => sessionStorage.setItem("user_id", user_id.toString()))
    .catch((error) => console.log(error));
  window.location.replace("http://localhost:8000/login/");
}

function onLoginButtonClick() {
  const login = document.getElementById("user_login").value;
  const password = document.getElementById("user_password").value;


  const url = "http://localhost:8000/users/login/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: name,
      password: password,
    }),
  })
    .then((response) => response.text())
    .then((text) => JSON.parse(text))
    .then((json) => json.user_id)
    .then((user_id) => sessionStorage.setItem("user_id", user_id.toString()))
    .catch((error) => console.log(error));
  window.location.replace("http://localhost:8000/div/");
}

function CheckLoginValid(status) {
    if (status == 200):
        window.location.replace("http://localhost:8000/login/");
    else if (status == 400):
        alert("Incorrect username");
    else if (status == 401)
        alert("Incorrect password");
    else:
        window.location.replace("http://localhost:8000/teapot/")
}

function CheckSingUpValid(status) {
    if (status == 200):
        window.location.replace("http://localhost:8000/div/")
    else if (status == 401):
        alert("Incorrect username");
    else:
        window.location.replace("http://localhost:8000/teapot/")
}

function CheckAnswers() {
    const
}
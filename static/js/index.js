function onRegisterButtonClick() {
  const name = document.getElementById("user_name").value;
  const password = document.getElementById("user_password").value;


  const url = "http://localhost:8000/users/new/";
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

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
    const iam0 = document.getElementById("iam0").value;
    const iam1 = document.getElementById("iam1").value;
    const iam2 = document.getElementById("iam2").value;
    const iam3 = document.getElementById("iam3").value;
    const iam4 = document.getElementById("iam4").value;

    const and_this1 = document.getElementById("Sandvich").value;
    const and_this2 = document.getElementById("Weapon").value;
    const and_this3 = document.getElementById("gun").value;
    const and_this4 = document.getElementById("Dispenser").value;

    const gun_weight = document.getElementById("weight").value;

    const bullet_cost100 = document.getElementById("bullet_cost100").value;
    const bullet_cost200 = document.getElementById("bullet_cost200").value;
    const bullet_cost300 = document.getElementById("bullet_cost300").value;
    const bullet_cost400 = document.getElementById("bullet_cost400").value;

    const it_fires = document.getElementById("fires").value;

    const fire_speed = document.getElementById("fire_speed").value;

    const time_cost1 = document.getElementById("time_cost100000").value;
    const time_cost2 = document.getElementById("time_cost200000").value;
    const time_cost3 = document.getElementById("time_cost300000").value;
    const time_cost4 = document.getElementById("time_cost400000").value;

    const fire_this1 = document.getElementById("fire_sandvich").value;
    const fire_this2 = document.getElementById("fire_weapon").value;
    const fire_this3 = document.getElementById("fire_gun").value;
    const fire_this4 = document.getElementById("fire_scout").value;

    const fire_time1 = document.getElementById("time1").value;
    const fire_time2 = document.getElementById("time2").value;
    const fire_time3 = document.getElementById("time3").value;
    const fire_time4 = document.getElementById("time4").value;
    const fire_time5 = document.getElementById("time5").value;

    const omg = document.getElementById("omg").value;
    const who = document.getElementById("WHO?").value;

    const who1 = document.getElementById("who1").value;
    const who2 = document.getElementById("who2").value;
    const who3 = document.getElementById("who3").value;
    const who4 = document.getElementById("who4").value;

    const laugh1 = document.getElementById("haha1").value;
    const laugh2 = document.getElementById("haha2").value;
    const laugh3 = document.getElementById("haha3").value;
    const laugh4 = document.getElementById("haha4").value;
    const laugh5 = document.getElementById("haha5").value;
    const laugh6 = document.getElementById("haha6").value;

      const url = "http://localhost:8000/test";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
iam: iam0 * 1 + iam1 * 2 + iam2 * 4 + iam3 * 8 + iam4 * 16
and_this: and_this1 * 1 + and_this2 * 2 + and_this3 * 3 + and_this * 4
gun_weight: gun_weight
bullet_cost: bullet_cost100 * 1 + bullet_cost200 * 2 + bullet_cost300 * 3 + bullet_cost400 * 4
it_fires: it_fires
fire_speed: fire_speed
time_cost: time_cost1 * 1 + time_cost2 * 2  + time_cost3 * 3  + time_cost4 * 4
fire_this: fire_this1 * 1 + fire_gun2 * 2  + fire_gun3 * 3  + fire_gun4 * 4
fire_time: fire_time1 * 1 + fire_time2 * 2 + fire_time3 * 4 + fire_time4 * 8 + fire_time5 * 16
omg: omg
who: who
who_touched_my_gun: who1 + who2 + who3 + who4
laugh = laugh1 * 1 + laugh2 * 2 + laugh3 * 4 + laugh4 * 8 + laugh5 * 16 + laugh * 32

token = 1
    }),
  })
    .then((response) => response.text())
    .then((text) => JSON.parse(text))
    .then((json) => json.user_id)
    .then((user_id) => sessionStorage.setItem("user_id", user_id.toString()))
    .catch((error) => console.log(error));
  window.location.replace("http://localhost:8000/leaderbord/");
}

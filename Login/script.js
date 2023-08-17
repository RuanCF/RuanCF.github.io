/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

/* -- login comparison -- */

const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
  
    if (username === "knox" && password === "knox") {
      window.location.href = "../Lobby/home.html";
    } else {
      document.getElementById("mensagem-erro").innerHTML = "Usuário ou senha inválidos";
    }
});

function changeUser() {
  document.getElementById('username').placeholder = '';
}function changeBackUser() {
  document.getElementById('username').placeholder = 'Username';
}

function changePass() {
  document.getElementById('password').placeholder = '';
}function changeBackPass() {
  document.getElementById('password').placeholder = 'Password';
}

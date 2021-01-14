const socket = io.connect("http://localhost:3000/");

var mesaj = document.querySelector("#message"),
  baslik = document.querySelector("#handle"),
  btn = document.querySelector("#send"),
  output = document.querySelector("#output");
feedback = document.querySelector("#feedback");

btn.addEventListener("click", function () {
  socket.emit("chat", {
    mesaj: mesaj.value,
    baslik: baslik.value,
  });

  mesaj.value = "";
  baslik.value = "";
});

mesaj.addEventListener("keypress", function () {
  socket.emit("yaziyor...", baslik.value);
});

socket.on("chat2", function (data) {
  output.innerHTML +=
    "<p><strong>" + data.baslik + " : </strong>" + data.mesaj + "</p>";
  feedback.innerHTML = "";
});
socket.on("yaziyor...", function (data) {
  feedback.innerHTML = "<p><em>" + data + " yaziyor... </em></p>";
});

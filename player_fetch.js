const fetch = require("node-fetch");

(function loop() {
  setTimeout(async function () {
    await fetch("https://bloody-ark.com/api/fetch_players");
    loop()
  }, 300000); // 1000 = 1sec
}());

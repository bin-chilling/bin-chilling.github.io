function loadSave() {
  return JSON.parse(localStorage.getItem("save")) || {
    all_lvls: false,
    coin_achvmnt: false,
    deathless: false,
    speedrun: false,
    deaths: false,
    count: 0,
  };
}

function saveGame(data) {
  localStorage.setItem("save", JSON.stringify(data));
}

function unlock_all_lvls() {
  let save = loadSave();

  if (!save.all_lvls) {
    save.all_lvls = true;
    saveGame(save);
    document.getElementById("all_lvls").src = "achievements/All lvls.png"
    save.count = save.count + 1;
    document.getElementById("ach_count").innerHTML = save.count + "/5";
    saveGame(save);
  }

  
}

function unlock_coins() {
  let save = loadSave();

  if (!save.coin_achvmnt) {
    save.coin_achvmnt = true;
    saveGame(save);
    document.getElementById("coin_achvmnt").src = "achievements/Coin-achvmnt.png"
    save.count = save.count + 1;
    document.getElementById("ach_count").innerHTML = save.count + "/5";
    saveGame(save);
  }
  
}

function unlock_deathless() {
  let save = loadSave();

  if (!save.deathless) {
    save.deathless = true;
    document.getElementById("deathless").src = "achievements/deathless.png"
    save.count = save.count + 1;
    document.getElementById("ach_count").innerHTML = save.count + "/5";
    saveGame(save);
  }
}

function unlock_deaths() {
  let save = loadSave();

  if (!save.deaths) {
    save.deaths = true;
    saveGame(save);
    document.getElementById("deaths_ach").src = "achievements/Deaths.png"
    save.count = save.count + 1;
    document.getElementById("ach_count").innerHTML = save.count + "/5";
    saveGame(save);
  }
}

function unlock_speedrun() {
  let save = loadSave();

  if (!save.speedrun) {
    save.speedrun = true;
    saveGame(save);
    document.getElementById("speedrun").src = "achievements/Speedrun.png"
    save.count = save.count + 1;
    document.getElementById("ach_count").innerHTML = save.count + "/5";
    saveGame(save);
  }
}

(function init() {
  let save = loadSave();

  console.log("Loaded save:", save);


  document.getElementById("ach_count").innerHTML = loadSave().count + "/5";
  if (save.all_lvls) document.getElementById("all_lvls").src = "achievements/All lvls.png";
  if (save.coin_achvmnt) document.getElementById("coin_achvmnt").src = "achievements/Coin-achvmnt.png";
  if (save.deathless) document.getElementById("deathless").src = "achievements/deathless.png";
  if (save.deaths) document.getElementById("deaths_ach").src = "achievements/Deaths.png";
  if (save.speedrun) document.getElementById("speedrun").src = "achievements/Speedrun.png";
})();
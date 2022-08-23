const checkClass = document.getElementById("theme");
const dkmd = document.getElementById("dark");
const clscmd = document.getElementById("og");
const apps = document.getElementById("ai");

clscmd.onclick = function() {ChangeClassicMode()};

dkmd.onclick = function () {ChangeDarkMode()};

function ChangeDarkMode(){
    checkClass.className = "dark-theme";
    apps.style.filter = "invert(100%)";
}

function ChangeClassicMode(){
   checkClass.className = "classic-theme";
   apps.style.filter = "none";
}

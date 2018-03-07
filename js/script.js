
// function to know when you should show the icon or words in the navbar

function menuClick (){
  var disp = document.getElementById('menu-words').style.display;
  console.log(disp);
  // var disp is used to know the status of the case 1 or 2, see in console
  document.getElementById('menu-words').style.display = "flex";
    // case 0 : class row is set by default as flex, initial status before clicking
  if (disp == "flex") {
    document.getElementById('menu-words').style.display = "none";
    document.getElementById('menu-icon').style.backgroundImage = "url(asset/archive/svgs/switch1.svg)";
    // case 1 : dont show words + show icon 1
  } else {
    document.getElementById('menu-words').style.display = "flex";
    document.getElementById('menu-icon').style.backgroundImage = "url(asset/archive/svgs/switch2.svg)";
    // case 2 : show words + show icon 2
  }
}
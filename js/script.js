function menuClick (){
  var disp = document.getElementById('menu-SM').style.display;
  console.log(disp);
  document.getElementById('menu-SM').style.display = "flex";
  if (disp == "flex") {
    document.getElementById('menu-SM').style.display = "none";
  } else {
    document.getElementById('menu-SM').style.display = "flex";
  }
}
//JavaScript JS

//Open Menu

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


//Bytte Kurs

function datasikkerhet(){
  document.getElementById("personvern").style.display = "none";
  document.getElementById("datasikkerhet").style.display = "block";
  document.getElementById("personvern-link1").classList.remove("kurs-active");
  document.getElementById("datasikkerhet-link1").classList.add("kurs-active");
  document.getElementById("personvern-link2").classList.remove("kurs-active");
  document.getElementById("datasikkerhet-link2").classList.add("kurs-active");
}

function personvern(){
  document.getElementById("personvern").style.display = "block";
  document.getElementById("datasikkerhet").style.display = "none";
  document.getElementById("personvern-link1").classList.add("kurs-active");
  document.getElementById("datasikkerhet-link1").classList.remove("kurs-active");
  document.getElementById("personvern-link2").classList.add("kurs-active");
  document.getElementById("datasikkerhet-link2").classList.remove("kurs-active");
}


//Endre Menyfarge onScroll


const navColor = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 800) {
    navColor.classList.add("navBackground");
  } else {
    navColor.classList.remove("navBackground");
  }
});

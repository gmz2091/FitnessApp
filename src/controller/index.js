import views from "../view/index.html";
import "tailwindcss/tailwind.css";
import FirebaseApp from "../utils/firebase.config";
import SlideNav from "./slidenav";

const HomeUi = async (user) => {
  FirebaseApp();
  //console.log(nav)

  const section = document.createElement("section");
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  document.addEventListener("touchmove", ShowMenu, false);

  //document.addEventListener("DOMContentLoaded", startup);

  return divElement;
};

export default HomeUi;

const ShowMenu = (e) => {
  const sideMenu = document.getElementById("sideMenu");
  const touch = e.changedTouches[0];
  const px = touch.pageX;
  const mid = Math.floor(screen.width / 2);
  console.log(px, mid);
  if (px > mid) {
    //sideMenu.style.width = "-250px";
    sideMenu.style.marginLeft = "-100%";
    sideMenu.style.transition = ".3s";
  } else {
    sideMenu.style.width = "250px";
    sideMenu.style.marginLeft = "0px";
    sideMenu.style.transition = ".3s";
  }
};

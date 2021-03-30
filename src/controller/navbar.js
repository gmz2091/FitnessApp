import Routes from "../routes/routes";
import viewNav from "../view/navbar.html";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const Navbar = async () => {
  await activeUser();
  const navView = document.querySelector("#navBar");
  navView.setAttribute("id", "nav");
  navView.classList = "bg-gray-800";
  navView.innerHTML = viewNav;


  await Routes(window.location.hash);

  window.addEventListener("hashchange", navBarLinks);
  return navView;
};

export default Navbar;

const navBarLinks = async (e) => {
  const home = document.querySelector("#home");
  const login = document.querySelector("#login");
  const signUp = document.querySelector("#signUp");
  const acount = document.querySelector("#acount");

  await Routes(window.location.hash);

  switch (window.location.hash) {
    case "#/":
      login.classList =
        "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      signUp.classList =
        "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      home.classList.remove("text-gray-300");
      home.classList =
        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
      return;
    case "#/login":
      signUp.classList =
        "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      home.classList = "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      login.classList.remove("text-gray-300");
      login.classList =
        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
      return;
    case "#/signup":
      login.classList =
        "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      home.classList = "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      signUp.classList.remove("text-gray-300");
      signUp.classList =
        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
      return;
    case "#/acount":
      signUp.classList =
        "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      login.classList =
        "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      home.classList = "text-gray-300 px-3 py-2 rounded-md text-sm font-medium";
      acount.classList.remove("text-gray-300");
      acount.classList =
        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
      return;
    default:
      home.classList.remove("text-gray-300");
      home.classList =
        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";

      break;
  }
};

const activeUser = async () => {
  const acount = document.getElementById("acount");
  const auth = firebase.auth();
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const hiddenDisplay = document.getElementById("block");
      const showDisplay = document.querySelector(".displayView");
      //hiddenDisplay.classList.remove("block");
      console.log(1);
      hiddenDisplay.remove();
      return showDisplay.appendChild(await AcountView(user));
    } else {
      console.log(0);
      return;
    }
  });
};

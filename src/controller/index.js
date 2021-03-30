import views from "../view/index.html";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "tailwindcss/tailwind.css";
import Home from "./home";
import LoginForm from "./loginForm";

const HomeUi = async (user) => {
  //await activeUser();
  //console.log(nav)

  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};

export default HomeUi;

/*const activeUser = async () => {
  const auth = firebase.auth();
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const hiddenDisplay = document.querySelector(".block");
      const showDisplay = document.querySelector(".displayView");
      //hiddenDisplay.classList.remove("block");
      hiddenDisplay.remove();
      showDisplay.appendChild(await Home(user));
      console.log(1);
      return await Home(user);
    } else {
      console.log(0);
      return await LoginForm();
    }
  });
};*/

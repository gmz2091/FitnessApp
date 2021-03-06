import views from "../view/acount.html";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import DetailsAcount from "./detailsAcount";

const AcountView = async (user) => {
  await activeUser(user);
  const divElement = document.createElement("div");
  divElement.classList = "flex flex-wrap ";
  divElement.innerHTML = views;

  return divElement;
};

export default AcountView;

const activeUser = async () => {
  const auth = firebase.auth();
  auth.onAuthStateChanged(async (user) => {
    const profileDropdown = document.getElementById("profileDropdown");
    //const main = document.getElementById("main");
    const login = document.getElementById("login");
    const signup = document.getElementById("signUp");
    const acount = document.getElementById("acount");
    const loginResponsive = document.getElementById("loginResponsive");
    const signupResponsive = document.getElementById("signUpResponsive");
    const acountResponsive = document.getElementById("acountResponsive");
    if (user) {
      signupResponsive.remove();
      loginResponsive.remove();
      login.remove();
      signup.remove();
      console.log(1);
      return await DetailsAcount(user);
    } else {
      profileDropdown.remove();
      acountResponsive.remove();
      acount.remove();
      console.log(0);
      return;
    }
  });
};

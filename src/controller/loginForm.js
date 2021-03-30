import viewLogin from "../view/loginForm.html";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import HomeUi from "./index";
import AcountView from "./acount";

const LoginForm = async () => {
  //await activeUser();
  const divForm = document.createElement("div");
  divForm.classList = "displayView flex flex-wrap grid xs:grid-rows-2";
  divForm.innerHTML = viewLogin;

  const signInForm = divForm.querySelector("#signInForm");
  //const loginEmail = divForm.querySelector("#login-email");
  const loginPassForm = divForm.querySelector("#login-password");

  const signInData = async (e) => {
    e.preventDefault();
    const { loginEmail, loginPass } = getLoginData();
    if (loginEmail === "" && loginPass === "") {
      alert("Ingrese un email y password valido");
      return;
    }
    if (loginPass.length < 8) {
      alert("El password debe contener mas de 8 caracteres");
      loginPassForm.value = "";
      return;
    }
    //Mcdielgmzadmin00
    console.log(loginEmail, loginPass);
    try {
      await signIn(loginEmail, loginPass);
    } catch (e) {
      if (e.code === "auth/wrong-password") {
        alert("Contraseña incorrecta, intente de nuevo");
        console.log(e);
        loginPassForm.value = "";
        return;
      }
    }
    alert("Welcome!!");
    signInForm.reset();
    return;
  };

  signInForm.addEventListener("submit", signInData);
  return divForm;
};

export default LoginForm;

const getLoginData = () => {
  const loginEmail = signInForm["login-email"].value;
  const loginPass = signInForm["login-password"].value;
  return { loginEmail, loginPass };
};

const signIn = async (email, password) => {
  const auth = firebase.auth();
  const creds = await auth.signInWithEmailAndPassword(email, password);
  //console.log(creds.user);
  return creds;
};

const activeUser = async () => {
  const login = document.getElementById("login");
  const acount = document.getElementById("acount");
  const auth = firebase.auth();
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const hiddenDisplay = document.getElementById("block");
      const showDisplay = document.querySelector(".displayView");
      //hiddenDisplay.classList.remove("block");
      console.log(1);
      login.remove();
      return window.location.hash = "#/acount"
      //showDisplay.appendChild(await AcountView(user));
    } else {
      acount.remove();
      console.log(0);
      return;
    }
  });
};

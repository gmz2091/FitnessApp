import viewLogin from "../view/loginForm.html";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import HomeUi from "./index";
import AcountView from "./acount";

const LoginForm = async () => {
  const divForm = document.createElement("div");
  divForm.classList = "displayView flex flex-wrap grid xs:grid-rows-2";
  divForm.setAttribute("id", "login");
  divForm.innerHTML = viewLogin;

  const signInForm = divForm.querySelector("#signInForm");
  const loginEmail = divForm.querySelector("#login-email");
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
      if (e.code === "auth/user-not-found") {
        alert(
          "El correo que ingerso no existe, verifique o crea una nueva cuenta"
        );
        console.log(e);
        loginEmail.value = "";
        loginPassForm.value = "";
        return;
      }
    }
    alert("Welcome!!");
    window.location.href = "#/acount";
    window.location.reload();
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

import views from "../view/signup.html";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const SignUpView = async (user) => {
  const divElement = document.createElement("div");
  const loginForm = document.querySelector("#loginForm");
  const name = document.querySelector("#name");
  const lastname = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const passwrod = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");

  divElement.innerHTML = views;

  const enviarData = async (e) => {
    e.preventDefault();
    if (
      name.value === "" &&
      lastname.value === "" &&
      email.value === "" &&
      passwrod.value === "" &&
      confirmPassword.value === ""
    ) {
      alert("El campo esta vacio");
      return;
    }
    if (passwrod.value !== confirmPassword.value) {
      alert("El password no coincide");
      passwrod.value = "";
      confirmPassword.value = "";
      return;
    }
    if (password.value.length < 6) {
      alert("El password debe de contener mas de 6 caracteres");
      passwrod.value = "";
      confirmPassword.value = "";
      return;
    }
    try {
      const { emails, passwords } = getInfoDaata();
      await signUp(emails, passwords);
      return;
    } catch (err) {
      const e = err;
      if (e.code === "auth/email-already-in-use") {
        alert("El correo ya esta en uso");
        email.value = "";
        return;
      }
    }
    alert("Bienvenido");
    loginForm.reset();
  };

  loginForm.addEventListener("submit", enviarData);

  const getInfoDaata = () => {
    const emails = loginForm["email"].value;
    const passwords = loginForm["password"].value;
    return { emails, passwords };
  };

  if (user) {
    return divElement;
  }
};

export default SignUpView;

const signUp = async (email, password) => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  const creds = await auth.createUserWithEmailAndPassword(email, password);
  console.log(creds);
  return db.collection("users").doc(creds.user.uid).set({
    name: loginForm["name"].value,
    lastname: loginForm["lastname"].value,
    email: loginForm["email"].value,
  });
};

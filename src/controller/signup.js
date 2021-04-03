import views from "../view/signup.html";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const SignUpView = async (user) => {
  const divElement = document.createElement("div");
  divElement.setAttribute("id", "signup");

  divElement.innerHTML = views;
  const loginForm = divElement.querySelector("#loginForm");

  const enviarData = async (e) => {
    const name = document.querySelector("#name");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const passwrod = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");
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
      window.location.href = "#/acount";
      window.location.reload();
      alert("Bienvenido");
      loginForm.reset();
      return;
    } catch (err) {
      const e = err;
      if (e.code === "auth/email-already-in-use") {
        alert("El correo ya esta en uso");
        email.value = "";
        return;
      }
    }
    return;
  };

  loginForm.addEventListener("submit", enviarData);
  return divElement;
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

const getInfoDaata = () => {
  const emails = loginForm["email"].value;
  const passwords = loginForm["password"].value;
  return { emails, passwords };
};

import HomeUi from "./controller";
import Navbar from "./controller/navbar";
import FirebaseApp from "./utils/firebase.config";
//import LoginForm from "./controller/loginForm";
//import Home from "./controller/home";

const App = () => {
  FirebaseApp();
  Navbar();
  //renderApp();
};

const renderApp = async () => {
  const main = null || document.getElementById("main");
  main.appendChild(await HomeUi()); //Al terminar la prueba con el login, agregar de nuevo Home()
};

window.addEventListener("load", App);
